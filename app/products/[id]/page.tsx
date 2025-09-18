'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Star, Truck, RefreshCw, ShieldCheck } from 'lucide-react';
import ProductGrid from '@/components/ProductGrid';

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.category === product?.category && p.id !== id).slice(0, 4);
  
  if (!product) {
    return <div className="container mx-auto px-4 py-16 text-center">Product not found</div>;
  }
  
  const handleAddToCart = () => {
    addToCart({...product, quantity});
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
          <Image 
            src={product.image} 
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="flex flex-col">
          <div className="mb-4">
            <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(120 reviews)</span>
            </div>
            <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>
            {product.oldPrice && (
              <p className="text-sm text-muted-foreground line-through">${product.oldPrice.toFixed(2)}</p>
            )}
          </div>
          
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center border rounded-md">
              <button 
                className="px-3 py-2 text-lg"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-3 py-2 text-lg">{quantity}</span>
              <button 
                className="px-3 py-2 text-lg"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <Button size="lg" onClick={handleAddToCart}>Add to Cart</Button>
          </div>
          
          <Separator className="my-6" />
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">Free shipping over $50</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">30-day returns</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm">2-year warranty</span>
            </div>
          </div>
        </div>
      </div>
      
      <Tabs defaultValue="description" className="mb-16">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="specifications">Specifications</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="py-4">
          <p>{product.description}</p>
          <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.</p>
        </TabsContent>
        <TabsContent value="specifications" className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-b pb-2">
              <p className="font-medium">Material</p>
              <p className="text-muted-foreground">Premium quality</p>
            </div>
            <div className="border-b pb-2">
              <p className="font-medium">Dimensions</p>
              <p className="text-muted-foreground">10 x 5 x 3 inches</p>
            </div>
            <div className="border-b pb-2">
              <p className="font-medium">Weight</p>
              <p className="text-muted-foreground">0.5 kg</p>
            </div>
            <div className="border-b pb-2">
              <p className="font-medium">Manufacturer</p>
              <p className="text-muted-foreground">Luxe Inc.</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="py-4">
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                  ))}
                </div>
                <p className="font-medium">Amazing product!</p>
              </div>
              <p className="text-sm text-muted-foreground mb-2">By Sarah J. on May 15, 2023</p>
              <p>This product exceeded my expectations. The quality is outstanding and it looks even better in person.</p>
            </div>
            <div className="border-b pb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
                  ))}
                </div>
                <p className="font-medium">Great value</p>
              </div>
              <p className="text-sm text-muted-foreground mb-2">By Michael T. on April 3, 2023</p>
              <p>Very happy with my purchase. Fast shipping and the product is exactly as described.</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">You might also like</h2>
        <ProductGrid products={relatedProducts} />
      </div>
    </div>
  );
}
