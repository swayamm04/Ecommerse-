import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const AdminLayout = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("admin_token");
        if (!token) {
            navigate("/admin/login");
        }
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Desktop Sidebar: Testing if this works locally */}
            <AdminSidebar className="w-64 h-screen hidden md:flex sticky top-0" />

            {/* Mobile Sidebar (Commented out for debugging)
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
                <SheetContent side="left" className="p-0 w-64">
                    <AdminSidebar className="h-full" />
                </SheetContent>
            </Sheet> 
            */}

            <main className="flex-1">
                {/* Mobile Header */}
                <div className="md:hidden bg-white p-4 border-b flex items-center gap-3">
                    {/* Temporarily disabled trigger
                    <SheetTrigger asChild onClick={() => setIsMobileOpen(true)}>
                        <button className="p-2 hover:bg-gray-100 rounded-md">
                            <Menu className="w-6 h-6" />
                        </button>
                    </SheetTrigger>
                    */}
                    <span className="font-bold text-lg">Admin Panel</span>
                </div>

                <div className="p-6">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
