<<<<<<< HEAD
import ProductCard from "./ProductCard";
import { products } from "@/data/products";
=======
import ProductCard, { ProductCardProps } from "./ProductCard";

const products: ProductCardProps[] = [
  {
    name: "Polycab Maxima+ Green Wire HR FR-LSH LF",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    regularPrice: 2670,
    salePrice: 1733,
    discountPercentage: 35,
    selectors: [
      { label: "Coil Size", options: ["90 Meters"] },
      { label: "Wire Thickness", options: ["1 Sqmm", "1.5 Sqmm", "2.5 Sqmm"] },
      { label: "Colour", options: ["Red - Rs. 1,733", "Black - Rs. 1,733", "Blue - Rs. 1,733"] }
    ]
  },
  {
    name: "Hettich Onsys 4447i Soft Close Hinges, 1 Set (2 Nos)",
    image: "https://home-run.co/cdn/shop/files/4447i_Soft_Close_Hinges_1_Set_2_Nos_6f701d9b-ca45-4133-940f-bcbeb9f842ac.png?v=1758624384&width=713",
    regularPrice: 384,
    salePrice: 227,
    discountPercentage: 41,
    selectors: [
      { label: "Crank", options: ["0 Crank - Rs. 227", "8 Crank - Rs. 227", "16 Crank - Rs. 227"] }
    ]
  },
  {
    name: "Birla White WallCare Putty, 30 Kg Bag",
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=400&h=400&fit=crop",
    regularPrice: 680,
    salePrice: 620,
    discountPercentage: 9,
    selectors: []
  },
  {
    name: "Century Sainik MR 303 Plywood",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=400&fit=crop", // Placeholder
    regularPrice: 1442,
    salePrice: 1344,
    discountPercentage: 7,
    selectors: [
      { label: "Thickness", options: ["6mm", "12mm", "19mm"] },
      { label: "Size", options: ["8' X 4' - Rs. 1,344", "7' X 4' - Rs. 1,176"] }
    ]
  },
  {
    name: "Asian Paints SmartCare Damp Proof Advanced",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=400&fit=crop", // Placeholder
    regularPrice: 1600,
    salePrice: 1200,
    discountPercentage: 25,
    selectors: [
      { label: "Size", options: ["4L - Rs. 1,200", "1L - Rs. 350", "10L - Rs. 2,800", "20L - Rs. 5,200"] }
    ]
  },
];
>>>>>>> 74e2503912ef0e6c995072b70ac1f2f1f5a013a8

const DealsSection = () => {
  return (
    <section className="py-8 bg-[#FFF9F0]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900">
            Todays Best Deal
          </h2>
          <a href="#" className="text-[#45a049] font-bold text-sm hover:underline">See All</a>
        </div>

        {/* Horizontal Scroll List */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:flex-wrap md:grid md:grid-cols-5 md:overflow-visible scrollbar-hide">
          {products.map((product, index) => (
            <div key={index} className="min-w-[140px] w-[140px] md:min-w-[180px] md:w-[180px] flex-shrink-0">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
