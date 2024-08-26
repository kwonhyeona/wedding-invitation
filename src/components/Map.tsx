import { useEffect, useRef } from 'react';
import markerSrc from '@/assets/map_pin3.png';
import { copyText, callPhone } from '@/utils';

const ADDRESS = '서울 강남구 언주로 508 상록회관 5층 아트홀';

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
        size: new naver.maps.Size(70, 70), // 이미지 크기
        scaledSize: new naver.maps.Size(46, 54), // 이미지 크기
        origin: new naver.maps.Point(0, 0),
        anchor: new naver.maps.Point(30, 40),
      },
      animation: naver.maps.Animation.BOUNCE,
    });
  }, []);

  return (
    <div className="bg-orange-300 text-gray-900 flex flex-col items-center justify-center py-8">
      <p className="text-2xl text-white font-bold">오시는 길</p>
      <button
        className="outline-none text-base font-medium text-white pt-4 pb-2"
        onClick={() => copyText(ADDRESS)}
      >
        "{ADDRESS}"
      </button>
      <button
        className="outline-none text-sm text-white"
        onClick={() => callPhone('025645757')}
      >
        (TEL. 02-564-5757)
      </button>
      <div className="w-[calc(100%-2rem)] h-[400px]">
        <div ref={mapRef} />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 pt-4"></div>
    </div>
  );
};

export default MapSection;
