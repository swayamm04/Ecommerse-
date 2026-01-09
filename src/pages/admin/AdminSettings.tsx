import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const AdminSettings = () => {
    return (
        <div className="space-y-6 max-w-4xl">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">Manage your store preferences and configurations.</p>
            </div>

            <Separator />

            <div className="grid gap-6">
                <div className="grid gap-2">
                    <h2 className="text-lg font-medium">General Information</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="storeName">Store Name</Label>
                            <Input id="storeName" defaultValue="HomeRun" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="storeEmail">Store Email</Label>
                            <Input id="storeEmail" defaultValue="contact@homerun.co" />
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="grid gap-4">
                    <h2 className="text-lg font-medium">Notifications</h2>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <Label className="text-base">Order Alerts</Label>
                            <p className="text-sm text-muted-foreground">Receive emails for new orders.</p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                            <Label className="text-base">Low Stock Alerts</Label>
                            <p className="text-sm text-muted-foreground">Notify when product stock is low.</p>
                        </div>
                        <Switch defaultChecked />
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button>Save Changes</Button>
                </div>
            </div>
        </div>
    );
};

export default AdminSettings;
