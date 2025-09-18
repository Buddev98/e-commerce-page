'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  ShoppingCart, 
  Search, 
  User, 
  Heart, 
  Menu, 
  X,
  ShoppingBag
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const pathname = usePathname();
  const { cart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  
  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];
  
  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${isScrolled ? 'bg-background/95 backdrop-blur-sm border-b' : 'bg-background'}`}>
      {/* Top bar */}
      <div className="hidden md:block border-b">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-xs">
          <div className="flex gap-4">
            <span>Free shipping on orders over $100</span>
            <span>|</span>
            <span>30-day returns</span>
          </div>
          <div className="flex gap-4">
            <Link href="/help" className="hover:underline">Help</Link>
            <span>|</span>
            <Link href="/account" className="hover:underline">My Account</Link>
          </div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      href={link.href}
                      className={`text-lg ${pathname === link.href ? 'font-bold' : ''}`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="font-bold text-xl">LUXE</span>
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm ${pathname === link.href ? 'font-bold' : ''}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile search toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            >
              {isMobileSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
            </Button>
            
            {/* Desktop search */}
            <div className="hidden lg:flex relative w-64">
              <Input 
                placeholder="Search products..." 
                className="pr-8"
              />
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
            
            {/* User actions */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Mobile search */}
        {isMobileSearchOpen && (
          <div className="mt-4 lg:hidden">
            <Input placeholder="Search products..." />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
