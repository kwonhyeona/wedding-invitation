import mainSrc from '@/assets/main.jpg';

const IntroduceSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="flex flex-row items-center justify-center gap-4 text-lg font-libre">
        <h1>2024</h1>
        <div className="w-[1px] h-4 bg-gray-900" aria-hidden />
        <h1>10</h1>
        <div className="w-[1px] h-4 bg-gray-900" aria-hidden />
        <h1>20</h1>
      </div>

      <div className="font-libre text-gray-400 text-sm font-extralight my-2">
        <h2>Sat. 15:20</h2>
      </div>

      <img className="rounded-full" src={mainSrc} alt="메인 사진" />
      <h3>권현아 X 김기철</h3>
    </div>
  );
};

export default IntroduceSection;
