
import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  weight: string;
}

const ProductCard = ({ id, name, image, price, originalPrice, weight }: ProductCardProps) => {
  const discount = originalPrice ? Math.round((originalPrice - price) / originalPrice * 100) : 0;
  
  return (
    <div className="rounded-lg overflow-hidden border border-gray-100 bg-white p-3 flex flex-col h-full relative">
      {discount > 0 && (
        <div className="absolute top-3 left-3 bg-blinkit-green text-white text-xs font-semibold px-2 py-0.5 rounded">
          {discount}% OFF
        </div>
      )}
      
      <div className="relative h-36 mb-2 flex items-center justify-center">
        <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
      </div>
      
      <div className="mt-2 flex-grow">
        <h3 className="text-sm font-medium line-clamp-2 mb-1">{name}</h3>
        <p className="text-xs text-gray-500 mb-2">{weight}</p>
      </div>
      
      <div className="flex items-center justify-between mt-auto">
        <div>
          <p className="font-semibold">₹{price}</p>
          {originalPrice && (
            <p className="text-xs text-gray-500 line-through">₹{originalPrice}</p>
          )}
        </div>
        <Button size="sm" className="bg-blinkit-green hover:bg-blinkit-green/90 h-8 w-8 p-0">
          <Plus size={16} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
