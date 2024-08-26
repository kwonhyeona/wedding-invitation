import { copyText } from '@/utils';
import Dialog from '@/components/common/Dialog';
import { useState } from 'react';
import CopyIcon from '@/components/icons/CopyIcon';

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
  return (
    <button
      className="w-full outline-0 border border-gray-900 bg-white text-gray-900 rounded-full text-base flex justify-center items-center p-4 font-bold gap-2"
      onClick={() => copyText(account)}
    >
      {sideName} <span className="font-medium">{name}</span>
      <CopyIcon />
    </button>
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
  return (
    <div className="flex flex-col justify-center items-center my-4 gap-4">
      <Account sideName={sideName} name={name} account={account} />
      <Account sideName="아버지" name={fatherName} account={fatherAccount} />
      <Account sideName="어머니" name={motherName} account={motherAccount} />
    </div>
  );
};

const Bank = () => {
  const [mode, setMode] = useState<'BRIDE' | 'GROOM'>('BRIDE');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-100 text-gray-900 w-full flex flex-col items-center justify-center py-8">
        <p className="text-2xl">마음 전하실 곳</p>
        <p className="text-sm py-4 text-gray-600">
          축복을 전달할 곳을 선택해주세요
        </p>
        <div className="w-full flex flex-col justify-center items-center p-8 gap-4">
          <button
            className="w-full outline-0 border border-gray-900 bg-white text-gray-900 rounded-full text-base flex justify-center items-center p-4 font-bold gap-2"
            onClick={() => {
              setMode('GROOM');
              setIsOpen(true);
            }}
          >
            신랑 측 계좌번호 보기
          </button>
          <button
            className="w-full outline-0 border border-gray-900 bg-white text-gray-900 rounded-full text-base flex justify-center items-center p-4 font-bold gap-2"
            onClick={() => {
              setMode('BRIDE');
              setIsOpen(true);
            }}
          >
            신부 측 계좌번호 보기
          </button>
        </div>
      </div>
      <Dialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={`${mode === 'BRIDE' ? `신부` : '신랑'} 측 계좌번호`}
        content={<ParentInfo {...BANK_INFO[mode]} />}
        footer={
          <button
            className="rounded-lg bg-green-400 py-3 px-6 font-sans text-sm font-bold uppercase text-white transition-all active:opacity-[0.85]"
            onClick={() => {
              console.log('zmfflrehla');
              setIsOpen(false);
            }}
          >
            확인
          </button>
        }
      />
    </>
  );
};

export default Bank;
