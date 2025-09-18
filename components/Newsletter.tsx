import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Newsletter = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="bg-muted rounded-xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-8">
            Stay updated with our latest products, exclusive offers, and style tips. Subscribe to our newsletter and get 10% off your first order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Your email address" className="sm:flex-1" />
            <Button>Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
