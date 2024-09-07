import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import 'dayjs/locale/en';

const CalendarSection = () => {
  return (
    <div className="bg-stone-50 text-gray-900 flex flex-col items-center justify-center pb-16">
      <Calendar
        activeStartDate={new Date('2024-10-20 15:30:00')}
        formatDay={(_, date) => dayjs(date).format('D')}
        formatShortWeekday={(_, date) => dayjs(date).locale('en').format('ddd')}
        tileClassName={({ date }) =>
          `text-gray-700 custom_date_${date.getDate().toString()} ${
            date.getDay() === 0 ? `custom_day_${date.getDay().toString()}` : ''
          }`
        }
        navigationLabel={({ date }) => (
          <>
            <span className="block pb-2 text-4xl text-gray-900 font-normal">
              {dayjs(date).format('YYYY. MM. DD')}
            </span>
            <span className="block text-base text-gray-900">
              {dayjs(date).format('dddd A h시 mm분')}
            </span>
          </>
        )}
        className="border-none bg-transparent"
      />
    </div>
  );
};

export default CalendarSection;
