import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogDescription
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

// Mock Data
const initialOrders = [
    { id: "ORD-001", customer: "John Doe", phone: "9876543210", date: "2024-03-15", total: 1733, status: "Processing", items: 2 },
    { id: "ORD-002", customer: "Jane Smith", phone: "9988776655", date: "2024-03-14", total: 4500, status: "Delivered", items: 5 },
    { id: "ORD-003", customer: "Bob Wilson", phone: "8877665544", date: "2024-03-13", total: 620, status: "Cancelled", items: 1 },
    { id: "ORD-004", customer: "Alice Brown", phone: "7766554433", date: "2024-03-12", total: 2350, status: "Processing", items: 3 },
    { id: "ORD-005", customer: "Charlie Day", phone: "6655443322", date: "2024-03-11", total: 1200, status: "Delivered", items: 1 },
];

const AdminOrders = () => {
    // Correctly define state with type inference from initialOrders
    const [orders, setOrders] = useState(initialOrders);
    const [searchQuery, setSearchQuery] = useState("");
    const [statusFilter, setStatusFilter] = useState("all");

    const filteredOrders = orders.filter((order) => {
        const matchesSearch =
            order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.phone.includes(searchQuery);

        const matchesStatus = statusFilter === "all" || order.status.toLowerCase() === statusFilter.toLowerCase();

        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status: string) => {
        switch (status.toLowerCase()) {
            case "delivered": return "bg-green-100 text-green-800 hover:bg-green-100";
            case "processing": return "bg-blue-100 text-blue-800 hover:bg-blue-100";
            case "cancelled": return "bg-red-100 text-red-800 hover:bg-red-100";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    const handleUpdateStatus = (id: string, newStatus: string) => {
        setOrders(orders.map(o => o.id === id ? { ...o, status: newStatus } : o));
        toast.success(`Order ${id} updated to ${newStatus}`);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 flex-1 max-w-sm">
                    <Search className="w-4 h-4 text-gray-500" />
                    <Input
                        placeholder="Search orders..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="h-9"
                    />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px]">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Filter by Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="processing">Processing</SelectItem>
                        <SelectItem value="delivered">Delivered</SelectItem>
                        <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="border rounded-lg bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Total</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredOrders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell className="font-medium">{order.id}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <span>{order.customer}</span>
                                        <span className="text-xs text-muted-foreground">{order.phone}</span>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge className={getStatusColor(order.status)} variant="secondary">
                                        {order.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right font-bold">₹{order.total}</TableCell>
                                <TableCell className="text-right">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="ghost" size="sm">
                                                <Eye className="w-4 h-4 mr-2" /> View
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Order Details - {order.id}</DialogTitle>
                                                <DialogDescription>
                                                    Confirm order items and update status.
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="py-4 space-y-4">
                                                <div className="grid grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <p className="text-muted-foreground">Customer</p>
                                                        <p className="font-medium">{order.customer}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-muted-foreground">Phone</p>
                                                        <p className="font-medium">{order.phone}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-muted-foreground">Date</p>
                                                        <p className="font-medium">{order.date}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-muted-foreground">Total Amount</p>
                                                        <p className="font-medium">₹{order.total}</p>
                                                    </div>
                                                </div>

                                                <div className="border-t pt-4">
                                                    <p className="font-medium mb-2">Update Status</p>
                                                    <div className="flex gap-2">
                                                        <Button
                                                            size="sm"
                                                            variant={order.status === 'Processing' ? 'default' : 'outline'}
                                                            onClick={() => handleUpdateStatus(order.id, 'Processing')}
                                                        >
                                                            Processing
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant={order.status === 'Delivered' ? 'default' : 'outline'}
                                                            onClick={() => handleUpdateStatus(order.id, 'Delivered')}
                                                            className={order.status === 'Delivered' ? "bg-green-600 hover:bg-green-700" : ""}
                                                        >
                                                            Delivered
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant={order.status === 'Cancelled' ? 'default' : 'outline'}
                                                            onClick={() => handleUpdateStatus(order.id, 'Cancelled')}
                                                            className={order.status === 'Cancelled' ? "bg-red-600 hover:bg-red-700" : ""}
                                                        >
                                                            Cancelled
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </TableCell>
                            </TableRow>
                        ))}
                        {filteredOrders.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                                    No orders found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AdminOrders;
