import CalendarSection from '@/components/Calendar';
import Footer from '@/components/Footer';
import GallerySection from '@/components/Gallery';
import GreetingSection from '@/components/Greeting';
import IntroduceSection from '@/components/Introduce';
import MapSection from '@/components/Map';

function App() {
  return (
    <div className="min-h-screen max-w-[600px] font-maruburi">
      <IntroduceSection />
      <GreetingSection />
      <GallerySection />
      <CalendarSection />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;
