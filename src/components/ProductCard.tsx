import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ChevronDown } from "lucide-react";

export interface ProductSelector {
  label: string;
  options: string[];
}

export interface ProductCardProps {
  name: string;
  image: string;
  regularPrice: number;
  salePrice: number;
  discountPercentage: number;
  selectors?: ProductSelector[];
}

const ProductCard = ({
  name,
  image,
  regularPrice,
  salePrice,
  discountPercentage,
  selectors,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  // State to track selected option for each selector
  const [selections, setSelections] = useState<Record<string, string>>({});

  return (
    <div className="flex flex-col h-full bg-transparent group">
      {/* Image Area with Discount Tag */}
      <div className="relative mb-4">
        {discountPercentage > 0 && (
          <div className="absolute top-0 left-0 z-10 bg-[#FFD700] text-black px-3 py-1 text-xs font-bold rounded-r-sm">
            {discountPercentage}% OFF
          </div>
        )}
        <div className="aspect-square bg-white rounded-xl p-4 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        {/* Title */}
        <h3 className="font-bold text-gray-900 text-sm leading-tight mb-2 line-clamp-2 min-h-[2.5em]">
          {name}
        </h3>

        {/* Price Row */}
        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-gray-400 text-xs line-through decoration-gray-400">
            Rs. {regularPrice.toLocaleString()}
          </span>
          <span className="text-base font-bold text-gray-900">
            Rs. {salePrice.toLocaleString()}
          </span>
        </div>

        {/* Selectors (Dropdowns) */}
        <div className="mt-auto space-y-3 mb-4">
          {selectors?.map((selector, idx) => (
            <div key={idx} className="space-y-1">
              <label className="text-[10px] font-bold text-[#45a049] uppercase tracking-wider">
                {selector.label}
              </label>
              <div className="relative">
                <select
                  className="w-full appearance-none bg-white border border-[#45a049] text-gray-700 text-xs font-bold py-2 px-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#45a049]"
                  defaultValue={selector.options[0]}
                  onChange={(e) => setSelections(prev => ({ ...prev, [selector.label]: e.target.value }))}
                >
                  {selector.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Footer: Counter + Add Button */}
        <div className="flex flex-row items-center gap-3 mt-auto pt-3">
          {/* Counter */}
          <div className="flex items-center justify-between border border-[#45a049] rounded-lg h-9 w-28 bg-white shrink-0">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-8 h-full flex items-center justify-center text-[#45a049] hover:bg-green-50 rounded-l-lg transition-colors"
            >
              <Minus className="w-4 h-4 font-bold" />
            </button>
            <span className="text-sm font-bold text-gray-700">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-8 h-full flex items-center justify-center text-[#45a049] hover:bg-green-50 rounded-r-lg transition-colors"
            >
              <Plus className="w-4 h-4 font-bold" />
            </button>
          </div>

          {/* Add Button */}
          <Button className="flex-1 bg-[#45a049] hover:bg-[#388e3c] text-white font-bold h-9 rounded-lg uppercase tracking-wide shadow-sm">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
