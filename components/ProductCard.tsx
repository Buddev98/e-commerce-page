'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addToCart({...product, quantity: 1});
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };
  
  return (
    <Link href={`/products/${product.id}`}>
      <div 
        className="group relative rounded-xl overflow-hidden border bg-background transition-all duration-300 hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {product.discount && (
            <Badge className="absolute top-2 left-2 bg-red-500">
              {product.discount}% OFF
            </Badge>
          )}
          
          <div className={`absolute right-2 top-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <Button 
              variant="secondary" 
              size="icon" 
              className="rounded-full shadow-sm"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          
          <div className={`absolute inset-x-0 bottom-0 p-4 transition-transform duration-300 ${isHovered ? 'translate-y-0' : 'translate-y-full'}`}>
            <Button 
              className="w-full"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium line-clamp-1">{product.name}</h3>
            <div className="flex items-center">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm">{product.rating}</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
          
          <div className="flex items-center gap-2">
            <span className="font-medium">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
