import BankSection from '@/components/Bank';
import CalendarSection from '@/components/Calendar';
import ContactSection from '@/components/Contact';
import Footer from '@/components/Footer';
import GallerySection from '@/components/Gallery';
import GreetingSection from '@/components/Greeting';
import IntroduceSection from '@/components/Introduce';
import MapSection from '@/components/Map';
import { useLayoutEffect, useState } from 'react';

import mainSrc from '@/assets/main.jpg';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = mainSrc;
    img.onload = () => setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="min-h-screen max-w-[600px] mx-auto font-maruburi">
      <IntroduceSection />
      <GreetingSection />
      <ContactSection />
      <GallerySection />
      <CalendarSection />
      <MapSection />
      <BankSection />
      <Footer />
    </div>
  );
}

export default App;
