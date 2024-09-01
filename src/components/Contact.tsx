import PhoneIcon from '@/components/icons/PhoneIcon';

import kicheolSrc from '@/assets/kicheol.png';
import hyeonaSrc from '@/assets/hyeona.png';
import { ReactNode, useState } from 'react';
import DownArrowIcon from '@/components/icons/DownArrowIcon';
import UpArrowIcon from '@/components/icons/UpArrowIcon';
import { callPhone } from '@/utils';

interface PersonInfoProps {
  positionName: string;
  name: string;
  phone: string;
  src: string;
  description: ReactNode;
}

const PersonInfo = ({
  positionName,
  name,
  phone,
  src,
  description,
}: PersonInfoProps) => {
  // const onClickBank = () => async () => {
  //   try {
  //     await navigator.clipboard.writeText(bank);
  //     window.alert('계좌번호가 복사되었습니다.');
  //   } catch (err) {
  //     window.alert('계좌번호 복사를 실패했습니다.');
  //   }
  // };

  return (
    <div className="shrink-1 basis-0 max-w-48 grow flex flex-col justify-center items-center gap-4">
      <img
        className="rounded-full object-cover"
        src={src}
        width="100%"
        height="100%"
        alt=""
      />

      <button
        className="outline-0 flex flex-row justify-center items-center gap-1"
        onClick={() => callPhone(phone)}
      >
        <p className="font-semibold text-sm">
          {positionName} <span className="text-lg">{name}</span>
        </p>
        <PhoneIcon width="20px" height="20px" />
      </button>
      <p className="text-center text-sm">{description}</p>
    </div>
  );
};

interface ParentInfoProps {
  sideName: string;
  fatherName: string;
  motherName: string;
  fatherPhone: string;
  motherPhone: string;
}

const ParentInfo = ({
  sideName,
  fatherName,
  motherName,
  fatherPhone,
  motherPhone,
}: ParentInfoProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-base">{sideName} 측 혼주</p>
      <div className="flex flex-col justify-center items-center my-4 gap-2">
        <button
          className="outline-0 flex flex-row justify-center items-center gap-1"
          onClick={() => callPhone(fatherPhone)}
        >
          <p className="text-sm">
            아버지 <span className="font-semibold text-base">{fatherName}</span>
          </p>
          <PhoneIcon width="20px" height="20px" />
        </button>
        <button
          className="outline-0 flex flex-row justify-center items-center gap-1"
          onClick={() => callPhone(motherPhone)}
        >
          <p className="text-sm">
            어머니 <span className="font-semibold text-base">{motherName}</span>
          </p>
          <PhoneIcon width="20px" height="20px" />
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-emerald-50 text-gray-900 w-full flex flex-col items-center justify-center py-16">
      <p className="text-2xl">연락하기</p>
      <div className="w-full flex flex-row justify-evenly items-center p-8 gap-4">
        <PersonInfo
          positionName="신랑"
          name="김기철"
          phone="01045401708"
          // bank="카카오뱅크 3333050804346"
          description={
            <>
              현아의 개그맨이
              <br />
              되겠습니다 🤡
            </>
          }
          src={kicheolSrc}
        />
        <PersonInfo
          positionName="신부"
          name="권현아"
          phone="01040908370"
          // bank="카카오뱅크 3333014717936"
          description={
            <>
              기철이의 자랑이
              <br />
              되겠습니다 😎
            </>
          }
          src={hyeonaSrc}
        />
      </div>
      <div className="h-px w-[calc(100%-2rem)] bg-gray-500 box-border" />
      <button
        className="text-gray-600 text-sm m-3 w-full flex justify-center items-center gap-2"
        onClick={() => setIsOpen(prev => !prev)}
      >
        혼주에게 연락하기 (클릭)
        {isOpen ? (
          <UpArrowIcon width="20px" height="20px" color="#4b5563" />
        ) : (
          <DownArrowIcon width="20px" height="20px" color="#4b5563" />
        )}
      </button>

      {isOpen && (
        <div className="w-full flex justify-evenly items-center">
          <ParentInfo
            sideName="신랑"
            fatherName="김태형"
            motherName="이정금"
            fatherPhone="01094007737"
            motherPhone="01090921708"
          />
          <ParentInfo
            sideName="신부"
            fatherName="권혁민"
            motherName="장남숙"
            fatherPhone="01037708944"
            motherPhone="01068602054"
          />
        </div>
      )}
      <div className="h-px w-[calc(100%-2rem)] bg-gray-500 box-border" />
    </div>
  );
};

export default Contact;
