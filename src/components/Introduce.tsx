import mainSrc from '@/assets/main.jpg';

const IntroduceSection = () => {
  return (
    <div className="bg-yellow-100 text-gray-900  w-full flex flex-col items-center justify-center py-16 px-8">
      <p className="font-deluxeEdition text-6xl mb-2">Wedding Day</p>
      <h1 className="flex items-center justify-center gap-8 text-2xl">
        <span>김기철</span>
        <span>&</span>
        <span>권현아</span>
      </h1>
      <img className="rounded-full my-8" src={mainSrc} alt="메인 사진" />
      <h2 className="text-lg">2024년 10월 20일 (일) 15:20</h2>
      <h2 className="text-lg mt-2">상록아트홀 5층 아트홀</h2>
    </div>
  );
};

export default IntroduceSection;
