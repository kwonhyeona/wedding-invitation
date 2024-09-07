import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useRef, useState } from 'react';
import LeftArrowIcon from '@/components/icons/LeftArrowIcon';
import RightArrowIcon from '@/components/icons/RightArrowIcon';

import image1 from '@/assets/1.jpg';
import image2 from '@/assets/2.jpg';
import image4 from '@/assets/4.png';
import image5 from '@/assets/4cut_2.png';
import image6 from '@/assets/4cut.png';
import image7 from '@/assets/5.png';
import image8 from '@/assets/6.png';
import image9 from '@/assets/7.png';
import image10 from '@/assets/bubble.png';
import image11 from '@/assets/IMG_1086.png';
import image12 from '@/assets/IMG_4839.png';
import image13 from '@/assets/IMG_4840.png';
import image14 from '@/assets/IMG_5826.jpg';
import image15 from '@/assets/IMG_4847.png';
import image16 from '@/assets/IMG_4848.png';
import image17 from '@/assets/IMG_4851.png';
import image18 from '@/assets/IMG_4852.png';
import image19 from '@/assets/IMG_0889.png';
import image20 from '@/assets/IMG_1788.png';
import image21 from '@/assets/IMG_1961.png';
import image22 from '@/assets/photo_4.png';
import image23 from '@/assets/NC6_3791.jpg';

const PHOTOS = [
  image23,
  image6,
  image14,
  image4,
  image21,
  image11,
  image12,
  image19,
  image13,
  image15,
  image16,
  image17,
  image18,
  image5,
  image22,
  image2,
  image1,
  image10,
  image20,
  image7,
  image8,
  image9,
];

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const nextNavigationRef = useRef(null);
  const prevNavigationRef = useRef(null);
  const photoContainerRef = useRef<HTMLDivElement>(null);

  console.log(currentIndex);

  return (
    <div className="bg-gray-100 text-gray-900 w-full flex flex-col items-center justify-center py-16">
      <p className="text-2xl mb-8">갤러리</p>
      <Swiper
        className="w-full relative"
        navigation={{
          nextEl: nextNavigationRef.current,
          prevEl: prevNavigationRef.current,
        }}
        pagination={{ bulletActiveClass: '!bg-rose-500' }}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        onSwiper={setSwiper}
        onSlideChange={swiper => setCurrentIndex(swiper.activeIndex)}
        loop
      >
        {PHOTOS.map(src => (
          <SwiperSlide>
            <img
              className="w-full h-[70vh] object-contain"
              key={src}
              src={src}
              alt=""
            />
          </SwiperSlide>
        ))}
        <button
          ref={prevNavigationRef}
          key="prev-navigation-button"
          className="absolute top-1/2 left-2 translate-y-[-50%] bg-white rounded-full py-2 pl-1.5 pr-2.5 z-10"
        >
          <LeftArrowIcon width="20px" height="20px" color="#111827" />
        </button>
        <button
          ref={nextNavigationRef}
          key="next-navigation-button"
          className="absolute top-1/2 right-2 translate-y-[-50%] bg-white rounded-full py-2 pl-2.5 pr-1.5 z-10"
        >
          <RightArrowIcon width="20px" height="20px" color="#111827" />
        </button>
      </Swiper>
      <div
        className="w-full overflow-x-scroll flex gap-2 mt-4"
        ref={photoContainerRef}
      >
        {PHOTOS.map((src, index) => (
          <img
            role="button"
            onClick={() => {
              console.log('index', index);
              swiper?.slideTo(index);
              photoContainerRef.current?.scrollTo({
                behavior: 'smooth',
                left: 50 * index + 8 * (index - 1) - window.innerWidth / 2 + 25,
              });
            }}
            key={src}
            className="object-cover"
            width="50px"
            height="50px"
            src={src}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
