import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Contractor",
    content:
      "HomeRun has transformed how I source materials. 60-minute delivery means my projects never stop. Highly recommended!",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Interior Designer",
    content:
      "The quality of products and speed of delivery is unmatched. My clients love the quick turnaround on their projects.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Mohammed Ali",
    role: "Home Owner",
    content:
      "Was skeptical at first, but HomeRun delivered cement within 45 minutes! Amazing service for my home renovation.",
    rating: 5,
    avatar: "MA",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Customer's love HomeRun
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join thousands of satisfied customers who trust us for their
            construction material needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
