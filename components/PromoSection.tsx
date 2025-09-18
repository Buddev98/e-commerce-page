import { Truck, RefreshCw, ShieldCheck, Clock } from 'lucide-react';

const PromoSection = () => {
  const features = [
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Free Shipping',
      description: 'On orders over $100',
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: 'Easy Returns',
      description: '30-day return policy',
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: 'Secure Payments',
      description: '100% secure checkout',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '24/7 Support',
      description: 'Always here to help',
    },
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4">
            <div className="bg-muted rounded-full p-3 mb-4">
              {feature.icon}
            </div>
            <h3 className="font-medium mb-1">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoSection;
