import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import Newsletter from '@/components/Newsletter';
import Testimonials from '@/components/Testimonials';
import PromoSection from '@/components/PromoSection';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <PromoSection />
      <FeaturedProducts />
      <Categories />
      <Testimonials />
      <Newsletter />
    </div>
  );
}
