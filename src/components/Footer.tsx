import leeaieanSrc from '@/assets/thanks/IMG_5562.jpg';
import bandSrc from '@/assets/thanks/IMG_5296.jpg';
import brotherSrc from '@/assets/thanks/IMG_2248.png';

const Footer = () => {
  return (
    <div className="bg-lime-600 text-white w-full flex flex-col items-center justify-center py-8 pb-[calc(2rem+env(safe-area-inset-bottom))]">
      <p className="font-deluxeEdition text-3xl mb-4">Special Thanks To</p>
      <div className="w-full flex flex-row justify-evenly items-center px-8">
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="rounded-full overflow-hidden">
            <img
              className="object-cover w-20 h-20"
              src={leeaieanSrc}
              alt="아연"
            />
          </div>
          <span className="text-sm font-light">부케</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="rounded-full overflow-hidden">
            <img
              className="object-cover w-20 h-20"
              src={brotherSrc}
              alt="오빠"
            />
          </div>
          <span className="text-sm font-light">축가</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="rounded-full overflow-hidden">
            <img className="object-cover w-20 h-20" src={bandSrc} alt="밴드" />
          </div>
          <span className="text-sm font-light">축연</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
