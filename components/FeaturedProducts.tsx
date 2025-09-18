import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';

const FeaturedProducts = () => {
  // Get featured products
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
          <p className="text-muted-foreground">Our handpicked selection of premium products</p>
        </div>
        <Link href="/products">
          <Button variant="outline" className="mt-4 md:mt-0">View All Products</Button>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
