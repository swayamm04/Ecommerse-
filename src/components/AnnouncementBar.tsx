const AnnouncementBar = () => {
  const announcements = [
    "Open 8am to 8pm (All Days)",
    "Free delivery for orders above Rs 10,000 🚀",
    "Serving Bangalore with ❤️",
    "1st delivery free with \"FreeRun\" 🚚",
    "Superfast delivery in minutes 🚀",
  ];

  return (
    <div className="bg-primary overflow-hidden py-2">
      <div className="flex animate-scroll-left whitespace-nowrap">
        {[...announcements, ...announcements].map((text, index) => (
          <span
            key={index}
            className="mx-8 text-sm font-medium text-primary-foreground"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
