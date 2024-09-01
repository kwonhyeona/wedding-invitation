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
        onClick={() =>
          copyText({
            text: ADDRESS,
            successMessage: '주소를 복사했습니다',
            errorMessage: '주소 복사에 실패했습니다',
          })
        }
      >
        "{ADDRESS}"
      </button>

      <button
        className="outline-none text-sm text-white mb-4"
        onClick={() => callPhone('025645757')}
      >
        (TEL. 02-564-5757)
      </button>
      <div className="w-[calc(100%-2rem)] h-[400px]">
        <div className="w-full h-full" ref={mapRef} />
      </div>
      <p className="mt-2 text-sm font-light text-white">
        <b className="font-bold">선릉역 5번출구</b>에서 웨딩홀 셔틀버스가
        운행됩니다.
      </p>
    </div>
  );
};

export default MapSection;
