
import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  image: string;
  name: string;
  link: string;
}

const CategoryCard = ({ image, name, link }: CategoryCardProps) => {
  return (
    <Link to={link}>
      <div className="rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white border border-gray-100 flex flex-col">
        <div className="h-36 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          />
        </div>
        <div className="p-3 text-center">
          <h3 className="text-sm font-medium">{name}</h3>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
