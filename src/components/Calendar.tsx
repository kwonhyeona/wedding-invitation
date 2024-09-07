import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import 'dayjs/locale/en';

const CalendarSection = () => {
  const weddingDay = new Date('2024-10-20 15:30:00');

  return (
    <div className="bg-stone-50 text-gray-900 flex flex-col items-center justify-center pb-16">
      <p className="text-center pb-4">
        <span className="block pb-2 text-4xl text-gray-900 font-normal">
          {dayjs(weddingDay).format('YYYY. MM. DD')}
        </span>
        <span className="block text-base text-gray-900">
          {dayjs(weddingDay).format('dddd A h시 mm분')}
        </span>
      </p>
      <Calendar
        className="border-none bg-transparent"
        activeStartDate={weddingDay}
        formatDay={(_, date) => dayjs(date).format('D')}
        formatShortWeekday={(_, date) => dayjs(date).locale('en').format('ddd')}
        tileClassName={({ date }) =>
          `text-gray-700 custom_date_${date.getDate().toString()} ${
            date.getDay() === 0 ? `custom_day_${date.getDay().toString()}` : ''
          }`
        }
        showNavigation={false}
      />
    </div>
  );
};

export default CalendarSection;
