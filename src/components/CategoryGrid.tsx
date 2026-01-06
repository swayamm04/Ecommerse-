import { categories } from "@/data/categories";

<<<<<<< HEAD
interface CategoryGridProps {
  onCategoryClick: (categoryName: string) => void;
}
=======
// Category data matching the provided screenshot
// Category data matching the provided screenshot
const categoryList = [
  { name: "Cement", image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=200&h=200&fit=crop" },
  { name: "Tiling", image: "https://gibtilingperth.com.au/wp-content/uploads/2021/01/home-improvement-renovation-construction-worker-tiler-is-tiling-min-768x512.jpg" },
  { name: "Painting", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=200&h=200&fit=crop" },
  { name: "Water Proofing", image: "https://www.baumerk.com/storage/app/media/blog/su-yalitim-malzemeleri-cover.jpg" },
  { name: "Plywood, MDF & HDHMR", image: "https://glamwoodinteriors.com/wp-content/uploads/2025/08/ChatGPT-Image-Aug-23-2025-11_31_10-AM-1024x683.webp" },
  { name: "Fevicol", image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=200&h=200&fit=crop" },
  { name: "Wires", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop" },
  { name: "Switches & Sockets", image: "https://www.bticino.ph/sites/g/files/ocwmcr1196/files/styles/product_sheet_page/public/ecat_assets/23-11-2024/01-30/LG-832270-WEB-R.jpg?itok=8Eoz0gtg" },
];
>>>>>>> 74e2503912ef0e6c995072b70ac1f2f1f5a013a8

const CategoryGrid = ({ onCategoryClick }: CategoryGridProps) => {
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900">Shop By Category</h2>
          <button onClick={() => onCategoryClick(categories[0].name)} className="text-[#45a049] font-bold text-sm hover:underline">See All</button>
        </div>

        {/* Simplified grid with specific blue background cards */}
        <div className="grid grid-cols-4 md:grid-cols-4 gap-3 md:gap-8 max-w-6xl mx-auto">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => onCategoryClick(cat.name)}
              className="flex flex-col items-center gap-4 cursor-pointer group"
            >
              {/* Card */}
              <div className="w-full aspect-square bg-[#E6F4F1] rounded-2xl md:rounded-[2rem] flex items-center justify-center p-2 md:p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-contain mix-blend-multiply drop-shadow-lg"
                />
              </div>
              {/* Label */}
              <span className="text-[10px] md:text-sm font-bold text-gray-900 text-center px-1 leading-tight">
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
