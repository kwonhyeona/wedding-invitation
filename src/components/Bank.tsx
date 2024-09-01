import { copyText } from '@/utils';
import { MouseEvent, useState } from 'react';
import UpArrowIcon from '@/components/icons/UpArrowIcon';
import DownArrowIcon from '@/components/icons/DownArrowIcon';

const BANK_INFO: Record<'BRIDE' | 'GROOM', ParentInfoProps> = {
  BRIDE: {
    sideName: '신부',
    name: '권현아',
    fatherName: '권혁민',
    motherName: '장남숙',
    account: '카카오뱅크 3333014717936',
    fatherAccount: '하나은행 17691057077707',
    motherAccount: '신한은행 110482355921',
  },
  GROOM: {
    sideName: '신랑',
    name: '김기철',
    fatherName: '김태형',
    motherName: '이정금',
    account: '카카오뱅크 3333050804346',
    fatherAccount: '농협 24104152027072',
    motherAccount: '농협 3021448409511',
  },
};

interface AccountProps {
  sideName: string;
  name: string;
  account: string;
}

const Account = ({ sideName, name, account }: AccountProps) => {
  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    copyText({
      text: account,
      successMessage: '계좌번호가 복사되었습니다',
      errorMessage: '계좌번호 복사에 실패했습니다',
    });
  };

  return (
    <p className="w-full flex justify-center items-center text-gray-900 p-4">
      <div className="flex flex-col justify-center gap-1 grow text-sm font-light">
        <span>
          {sideName} {name}
        </span>
        <span className="text-base font-normal">{account}</span>
      </div>
      <button
        className="bg-gray-100 outline-none rounded p-3"
        onClick={onClick}
      >
        복사
      </button>
    </p>
  );
};

interface ParentInfoProps {
  sideName: string;
  name: string;
  fatherName: string;
  motherName: string;

  account: string;
  fatherAccount: string;
  motherAccount: string;
}

const ParentInfo = ({
  sideName,
  name,
  fatherName,
  motherName,
  account,
  fatherAccount,
  motherAccount,
}: ParentInfoProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className={
        'w-full flex flex-col justify-center items-center bg-white text-gray-900 text-base font-bold overflow-hidden rounded-2xl border border-gray-900'
      }
    >
      <button
        className={
          'w-full outline-0 flex justify-center items-center gap-2 p-4'
        }
        onClick={() => {
          setIsOpen(prev => !prev);
        }}
      >
        {sideName} 측 계좌번호 보기
        {isOpen ? (
          <UpArrowIcon width="16px" height="16px" />
        ) : (
          <DownArrowIcon width="16px" height="16px" />
        )}
      </button>
      {isOpen && (
        <>
          <hr className="w-full border-gray-900" />
          <div className="w-full flex flex-col justify-center items-center my-4 gap-1">
            <Account sideName={sideName} name={name} account={account} />
            <hr className="w-[calc(100%-2rem)] border-gray-300" />
            <Account
              sideName="아버지"
              name={fatherName}
              account={fatherAccount}
            />
            <hr className="w-[calc(100%-2rem)] border-gray-300" />
            <Account
              sideName="어머니"
              name={motherName}
              account={motherAccount}
            />
          </div>
        </>
      )}
    </li>
  );
};

const Bank = () => {
  return (
    <>
      <div className="bg-gray-100 text-gray-900 w-full flex flex-col items-center justify-center py-16">
        <p className="text-2xl">마음 전하실 곳</p>
        <p className="text-sm py-4 text-gray-600">
          축복을 전달할 곳을 선택해주세요
        </p>
        <ul className="w-full flex flex-col justify-center items-center p-8 gap-2">
          <ParentInfo {...BANK_INFO['GROOM']} />
          <ParentInfo {...BANK_INFO['BRIDE']} />
        </ul>
      </div>
    </>
  );
};

export default Bank;
