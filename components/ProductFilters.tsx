'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const ProductFilters = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  
  const categories = [
    { id: 'clothing', label: 'Clothing' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'home', label: 'Home & Living' },
    { id: 'accessories', label: 'Accessories' },
  ];
  
  const brands = [
    { id: 'luxe', label: 'Luxe Brand' },
    { id: 'premium', label: 'Premium Co.' },
    { id: 'elite', label: 'Elite Designs' },
    { id: 'modern', label: 'Modern Living' },
    { id: 'tech', label: 'Tech Innovations' },
  ];
  
  const colors = [
    { id: 'black', label: 'Black', color: 'bg-black' },
    { id: 'white', label: 'White', color: 'bg-white border' },
    { id: 'gray', label: 'Gray', color: 'bg-gray-400' },
    { id: 'red', label: 'Red', color: 'bg-red-500' },
    { id: 'blue', label: 'Blue', color: 'bg-blue-500' },
    { id: 'green', label: 'Green', color: 'bg-green-500' },
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Filters</h3>
        <Button variant="outline" size="sm" className="w-full">Clear All</Button>
      </div>
      
      <Accordion type="multiple" defaultValue={['categories', 'price', 'brands', 'colors']}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category.id}`} />
                  <label
                    htmlFor={`category-${category.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[0, 1000]}
                max={1000}
                step={10}
                onValueChange={setPriceRange}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="brands">
          <AccordionTrigger>Brands</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {brands.map((brand) => (
                <div key={brand.id} className="flex items-center space-x-2">
                  <Checkbox id={`brand-${brand.id}`} />
                  <label
                    htmlFor={`brand-${brand.id}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {brand.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="colors">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {colors.map((color) => (
                <div key={color.id} className="flex flex-col items-center gap-1">
                  <button
                    className={`w-8 h-8 rounded-full ${color.color}`}
                    title={color.label}
                  />
                  <span className="text-xs">{color.label}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProductFilters;
