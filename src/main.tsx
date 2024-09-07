import React from 'react';
import ReactDOM from 'react-dom/client';

import 'swiper/css';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import App from '@/App';
import dayjs from 'dayjs';

import 'dayjs/locale/ko';
dayjs.locale('ko');

const start = async () => {
  await (document as any).fonts.ready;
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

start();
