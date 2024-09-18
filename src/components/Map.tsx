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
      zoom: 14,
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
        className="outline-none text-base font-medium text-white pt-4"
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
      <div className="w-full text-sm font-light text-white mt-4 px-4">
        <p className="flex justify-start items-start gap-4">
          <span className="font-bold shrink-0 basis-[50px]">지 하 철</span>
          <span>2호선/분당선 선릉역 5번 출구 (도보 5분)</span>
        </p>
        <p className="flex justify-start items-start gap-4 pt-1 pb-8">
          <span className="font-bold shrink-0 basis-[50px] flex gap-5">
            <span>버</span>
            <span>스</span>
          </span>
          <p className="flex flex-col">
            <span>
              KT 강남지사 하차: 141(도봉산 ↔ 염곡동), 6411(신정동 ↔ 선릉역)
            </span>
            <span>
              한국기술센터, 상록회관 하차: 141(도봉산 ↔ 염곡동), 6411(신정동 ↔
              선릉역)
            </span>
          </p>
        </p>
        <p className="text-center">
          <b className="font-bold">선릉역 5번출구</b>에서 웨딩홀 셔틀버스가
          운행됩니다.
        </p>
      </div>
    </div>
  );
};

export default MapSection;
