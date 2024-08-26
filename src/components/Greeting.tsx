const GreetingSection = () => {
  return (
    <div className="bg-gray-100 text-gray-900 w-full flex flex-col items-center justify-center p-8 py-16 gap-4 relative">
      <p className="text-2xl z-10 pb-4">인사말</p>
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
      <p className="w-full text-right text-xs pt-2">기철, 현아 올림</p>
    </div>
  );
};

export default GreetingSection;
