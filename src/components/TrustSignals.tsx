import { Truck, Package, Shield, Award } from "lucide-react";

const signals = [
  {
    icon: Truck,
    title: "Electric Delivery Fleet",
    description: "Eco-friendly delivery to your doorstep",
  },
  {
    icon: Package,
    title: "No Minimum Order",
    description: "Order any quantity you need",
  },
  {
    icon: Shield,
    title: "Secure Checkout",
    description: "100% safe & secure payments",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Only genuine branded products",
  },
];

const TrustSignals = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {signals.map((signal, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
                <signal.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{signal.title}</h3>
              <p className="text-sm text-muted-foreground">{signal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
