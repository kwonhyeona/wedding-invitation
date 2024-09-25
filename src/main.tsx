import React from 'react';
import ReactDOM from 'react-dom/client';

import 'swiper/css';
import 'react-calendar/dist/Calendar.css';
import './index.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import App from '@/App';
import dayjs from 'dayjs';
import { SpeedInsights } from '@vercel/speed-insights/react';

import titleSrc from '@/assets/title.png';

import 'dayjs/locale/ko';
dayjs.locale('ko');

const image = new Image();
image.src = titleSrc;
image.onload = () => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
      <SpeedInsights />
    </React.StrictMode>
  );
};
