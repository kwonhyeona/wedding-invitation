import { useEffect, useRef } from 'react';
import markerSrc from '@/assets/favicon.png';

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.naver || !mapRef.current) return;

    const map = new window.naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(37.5038913, 127.0429552),
      zoom: 17,
      scaleControl: true,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.5038913, 127.0429552),
      map: map,
      icon: {
        url: markerSrc,
        size: new naver.maps.Size(46, 54), // 이미지 크기
        scaledSize: new naver.maps.Size(46, 54), // 이미지 크기
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(30, 30),
      },
    });
  }, []);

  return (
    <div className="bg-white text-gray-900 flex flex-col items-center justify-center py-8">
      <div className="w-full h-[400px] bg-white text-gray-900" ref={mapRef}>
        지도입니다.
      </div>
      <div className="flex flex-col justify-center items-center gap-2 pt-4">
        <p className="text-lg">주소</p>
        <p className="text-base font-extralight">
          서울 강남구 언주로 508 상록회관 5층 아트홀
        </p>
      </div>
    </div>
  );
};

export default MapSection;
