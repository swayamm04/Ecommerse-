
// Category data matching the provided screenshot
// Category data matching the provided screenshot
const categoryList = [
  { name: "Cement", image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=200&h=200&fit=crop" },
  { name: "Tiling", image: "https://images.unsplash.com/photo-1620626012639-663806a6b579?w=200&h=200&fit=crop" },
  { name: "Painting", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=200&h=200&fit=crop" },
  { name: "Water Proofing", image: "https://images.unsplash.com/photo-1615816982857-e6c8673a5e92?w=200&h=200&fit=crop" },
  { name: "Plywood, MDF & HDHMR", image: "https://images.unsplash.com/photo-1558618047-f4b511cc0c69?w=200&h=200&fit=crop" },
  { name: "Fevicol", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=200&h=200&fit=crop" },
  { name: "Wires", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop" },
  { name: "Switches & Sockets", image: "https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?w=200&h=200&fit=crop" },
];

const CategoryGrid = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Simplified grid with specific blue background cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categoryList.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4 cursor-pointer group">
              {/* Card */}
              <div className="w-full aspect-square bg-[#E6F4F1] rounded-[2rem] flex items-center justify-center p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain mix-blend-multiply drop-shadow-lg"
                />
              </div>
              {/* Label */}
              <span className="text-sm font-bold text-gray-900 text-center px-2">
                {cat.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
