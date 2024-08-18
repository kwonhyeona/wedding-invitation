import { useEffect, useRef } from 'react';

const CalendarSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.naver || !mapRef.current) return;

    const map = new window.naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(37.5038913, 127.0429552),
    });

    new naver.maps.Marker({
      position: new naver.maps.LatLng(37.5038913, 127.0429552),
      map: map,
    });
  }, []);

  return (
    <div
      ref={mapRef}
      className="bg-gray-100 text-gray-900 w-full h-[400px] flex flex-col items-center justify-center py-8"
    >
      캘린더입니다.
    </div>
  );
};

export default CalendarSection;
