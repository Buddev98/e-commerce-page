import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 'clothing',
    name: 'Clothing',
    description: 'Premium apparel for every occasion',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Cutting-edge tech for modern living',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'home',
    name: 'Home & Living',
    description: 'Elevate your living space',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Complete your look with our accessories',
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

const Categories = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Shop by Category</h2>
        <p className="text-muted-foreground">Browse our wide range of product categories</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="group relative overflow-hidden rounded-xl">
            <div className="relative h-80 w-full">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="mb-4">{category.description}</p>
                <Link href={`/categories/${category.id}`}>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black w-full sm:w-auto">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
