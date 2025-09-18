import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <ShoppingBag className="h-6 w-6" />
              <span className="font-bold text-xl">LUXE</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Premium shopping experience with quality products and exceptional service.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-muted-foreground hover:text-foreground">All Products</Link></li>
              <li><Link href="/categories/clothing" className="text-muted-foreground hover:text-foreground">Clothing</Link></li>
              <li><Link href="/categories/electronics" className="text-muted-foreground hover:text-foreground">Electronics</Link></li>
              <li><Link href="/categories/home" className="text-muted-foreground hover:text-foreground">Home & Living</Link></li>
              <li><Link href="/categories/accessories" className="text-muted-foreground hover:text-foreground">Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-foreground">FAQs</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-foreground">Shipping & Returns</Link></li>
              <li><Link href="/warranty" className="text-muted-foreground hover:text-foreground">Warranty</Link></li>
              <li><Link href="/track-order" className="text-muted-foreground hover:text-foreground">Track Order</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Luxe. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground">Terms of Service</Link>
            <Link href="/cookies" className="text-muted-foreground hover:text-foreground">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
