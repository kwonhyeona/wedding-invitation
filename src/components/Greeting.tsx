const GreetingSection = () => {
  return (
    <div className="bg-gray-100 text-gray-900 w-full flex flex-col items-center justify-center p-8 py-16 gap-4 relative">
      <p className="text-2xl z-10 pb-4">모시는 말씀</p>
      <span className="z-10 text-sm leading-8">
        매일 손잡고 산책할 수 있는 친구를 만났습니다.
        <br />
        맛있는 것을 먹을 때마다 생각나는 사람이 생겼습니다.
        <br />매 순간 서로의 존재에 대해 감사하고,
        <br />
        서로를 존중하며,
        <br />
        곁에 있는 사람의 소중함을 잊지 않고 살아가겠습니다.
        <br />
        언제나 처음처럼 사랑하겠습니다.
        <br />
        저희의 앞날을 함께 축복해주시면 감사하겠습니다.
      </span>
      <div className="flex flex-col justify-center items-end text-xs pt-4">
        <div className="flex justify-center items-center gap-3">
          <span className="flex justify-start items-center">
            <span className="text-sm font-medium shrink-0">김태형·이정금</span>
            의
            <span className="inline-block w-[21px] pl-1 box-content">아들</span>
          </span>
          <span className="text-sm font-medium">기철</span>
        </div>
        <div className="flex justify-center items-center gap-3">
          <span className="flex justify-start items-center">
            <span className="text-sm font-medium shrink-0">권혁민·장남숙</span>
            의
            <span className="inline-block w-[21px] pl-1 box-content text-right shrink-0">
              딸
            </span>
          </span>
          <span className="text-sm font-medium">현아</span>
        </div>
      </div>
    </div>
  );
};

export default GreetingSection;
