import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { toast } from "sonner";

interface Address {
    id?: string;
    pincode: string;
    houseNo: string;
    area: string;
    landmark: string;
    type?: "Home" | "Work" | "Other";
}

interface User {
    phone: string;
    name?: string;
    photo?: string;
    password?: string;
    address?: Address;
    savedAddresses?: Address[];
}

interface AuthContextType {
    user: User | null;
    location: User["address"] | null;
    isAuthenticated: boolean;
    isLoginOpen: boolean;
    registrationRequired: boolean;
    openLogin: () => void;
    closeLogin: () => void;
    checkUser: (phone: string) => void;
    verifyOtp: (otp: string) => void;
    login: (phone: string, password: string) => Promise<boolean>;
    register: (phone: string, name: string, password: string, photo?: string) => Promise<void>;
    verifyResetOtp: (phone: string, otp: string) => Promise<void>;
    resetPassword: (phone: string, otp: string, password: string) => Promise<void>;
    completeRegistration: (name: string, photo?: string) => void; // Keeping for compatibility if needed, but redundant with register
    updateAddress: (address: Address) => void;
    addAddress: (address: Address) => void;
    selectAddress: (address: Address) => void;
    updateProfile: (name: string) => void;
    detectLocation: () => Promise<void>;
    logout: () => void;
}

const DUMMY_USERS: Record<string, User> = {
    "9999999999": {
        phone: "9999999999",
        name: "Old User",
        password: "123456",
        address: {
            pincode: "560035",
            houseNo: "123",
            area: "Sarjapur Road",
            landmark: "Near Wipro Office"
        }
    }
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(() => {
        const saved = localStorage.getItem("homerun_user");
        return saved ? JSON.parse(saved) : null;
    });
    const [location, setLocation] = useState<User["address"] | null>(() => {
        const saved = localStorage.getItem("homerun_location");
        return saved ? JSON.parse(saved) : null;
    });
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [tempPhone, setTempPhone] = useState("");
    const [registrationRequired, setRegistrationRequired] = useState(false);

    useEffect(() => {
        if (user) {
            localStorage.setItem("homerun_user", JSON.stringify(user));
            if (user.address) {
                setLocation(user.address);
            }
        } else {
            localStorage.removeItem("homerun_user");
        }
    }, [user]);

    useEffect(() => {
        if (location) {
            localStorage.setItem("homerun_location", JSON.stringify(location));
        } else {
            localStorage.removeItem("homerun_location");
        }
    }, [location]);

    const openLogin = () => {
        setIsLoginOpen(true);
        setRegistrationRequired(false);
    };
    const closeLogin = () => setIsLoginOpen(false);

    const checkUser = (phone: string) => {
        setTempPhone(phone);
    };

    const verifyOtp = (otp: string) => {
        // Kept for legacy or specific uses, but main flow uses login/register
        if (otp === "0000") throw new Error("Invalid OTP");
    };

    const login = async (phone: string, password: string): Promise<boolean> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const existingUser = DUMMY_USERS[phone];
                if (existingUser) {
                    if (existingUser.password === password) {
                        setUser(existingUser);
                        // Auto-select address
                        if (existingUser.savedAddresses && existingUser.savedAddresses.length > 0) {
                            setLocation(existingUser.savedAddresses[0]);
                        } else if (existingUser.address) {
                            setLocation(existingUser.address);
                        }
                        closeLogin();
                        resolve(true);
                    } else {
                        reject(new Error("Invalid password"));
                    }
                } else {
                    reject(new Error("User not found"));
                }
            }, 800);
        });
    };

    const register = async (phone: string, name: string, password: string, photo?: string): Promise<void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newUser: User = { phone, name, password, photo };
                // In a real app, we would save to backend. specific to this session:
                DUMMY_USERS[phone] = newUser;
                setUser(newUser);
                closeLogin();
                resolve();
            }, 800);
        });
    };

    const verifyResetOtp = async (phone: string, otp: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (otp === "0000" || otp.length !== 4) {
                    reject(new Error("Invalid OTP"));
                } else {
                    resolve();
                }
            }, 800);
        });
    };

    const resetPassword = async (phone: string, otp: string, password: string): Promise<void> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (otp === "0000" || otp.length !== 4) {
                    reject(new Error("Invalid OTP"));
                    return;
                }
                // Verify user exists
                const existingUser = DUMMY_USERS[phone];
                if (!existingUser) {
                    reject(new Error("User not found"));
                    return;
                }

                // Update password
                existingUser.password = password;
                DUMMY_USERS[phone] = existingUser;
                resolve();
            }, 800);
        });
    };

    const completeRegistration = (name: string, photo?: string) => {
        // Deprecated but kept to avoid breaking untyped calls if any
        register(tempPhone, name, "123456", photo);
    };

    const updateAddress = (address: Address) => {
        if (user) {
            setUser({ ...user, address });
        }
        setLocation(address);
    };

    const addAddress = (address: Address) => {
        if (!user) return;
        const newAddress = { ...address, id: Date.now().toString() };
        const updatedAddresses = [...(user.savedAddresses || []), newAddress];

        // If it's the first address, make it default
        const isFirst = updatedAddresses.length === 1;

        setUser({
            ...user,
            savedAddresses: updatedAddresses,
            address: isFirst ? newAddress : user.address
        });

        if (isFirst) setLocation(newAddress);
        toast.success("Address added successfully");
    };

    const selectAddress = (address: Address) => {
        if (user) {
            setUser({ ...user, address });
        }
        setLocation(address);
        toast.success(`Delivering to ${address.type || "selected location"}`);
    };

    const updateProfile = (name: string) => {
        if (user) {
            setUser({ ...user, name });
            toast.success("Profile updated successfully!");
        }
    };

    const detectLocation = async () => {
        return new Promise<void>((resolve, reject) => {
            if (!navigator.geolocation) {
                toast.error("Geolocation is not supported by your browser");
                reject();
                return;
            }

            const toastId = toast.loading("Detecting location...");

            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const { latitude, longitude } = position.coords;
                        // Using OpenStreetMap Nominatim API (Free, no key required for usage < 1/sec)
                        const response = await fetch(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                        );

                        if (!response.ok) throw new Error("Location service unavailable");

                        const data = await response.json();

                        if (data && data.address) {
                            const newAddress = {
                                id: Date.now().toString(),
                                pincode: data.address.postcode || "",
                                houseNo: "", // GPS usually cannot determine house number
                                area: data.address.suburb || data.address.neighbourhood || data.address.road || data.address.village || "",
                                landmark: data.address.city || data.address.state_district || data.address.county || "",
                                type: "Home" as const
                            };

                            // Clean up empty fields if needed or ensure fallback
                            if (!newAddress.area && newAddress.landmark) {
                                newAddress.area = newAddress.landmark;
                            }

                            setLocation(newAddress);
                            if (user) {
                                const updatedAddresses = [...(user.savedAddresses || []), newAddress];
                                setUser({ ...user, address: newAddress, savedAddresses: updatedAddresses });
                            }
                            toast.dismiss(toastId);
                            toast.success(`Location set to ${newAddress.area}`);
                            resolve();
                        } else {
                            throw new Error("Address details not found");
                        }
                    } catch (error) {
                        console.error("Geocoding error:", error);
                        toast.dismiss(toastId);
                        toast.error("Could not fetch address details");
                        reject();
                    }
                },
                (error) => {
                    toast.dismiss(toastId);
                    toast.error("Unable to retrieve your location");
                    reject();
                }
            );
        });
    };

    const logout = () => {
        setUser(null);
        setLocation(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                location,
                isAuthenticated: !!user && !!user.name,
                isLoginOpen,
                registrationRequired,
                openLogin,
                closeLogin,
                checkUser,
                verifyOtp,
                login,
                register,
                verifyResetOtp,
                resetPassword,
                completeRegistration,
                updateAddress,
                addAddress,
                selectAddress,
                updateProfile,
                detectLocation,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
