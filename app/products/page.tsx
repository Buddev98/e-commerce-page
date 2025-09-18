import ProductGrid from '@/components/ProductGrid';
import ProductFilters from '@/components/ProductFilters';
import { Separator } from '@/components/ui/separator';
import { products } from '@/data/products';

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">All Products</h1>
      <p className="text-muted-foreground mb-8">Browse our collection of premium products</p>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <ProductFilters />
        </div>
        <Separator orientation="vertical" className="hidden md:block" />
        <div className="flex-1">
          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
}
