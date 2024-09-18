import { useState } from 'react';


interface PropsC {
    onSelectDate: (date: string) => void
  onCloseP : ()=>void
}

const CalendarPopover = ({ onSelectDate, onCloseP }: PropsC) => {
  const daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());


  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const calendarDays = Array.from({ length: firstDayOfMonth }).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  const handleDateClick = (day: number) => {
    const dateStr = `${currentYear}-${currentMonth + 1}-${day}`;
    setSelectedDate(day);
    onSelectDate(dateStr);
    onCloseP()
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="relative">
        <div className="w-full p-4">
   
          <div className="flex justify-between items-center mb-4">
            <button
              className="p-1 bg-gray-200 text-base w-8 h-8 font-OpenSans font-semibold hover:bg-gray-300 rounded-full"
              onClick={handlePrevMonth}
            >
              &lt;
            </button>
            <span className="text-base font-OpenSans font-semibold">
              {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })}{' '}
              {currentYear}
            </span>
            <button
              className="p-1 bg-gray-200 w-8 h-8 text-base font-OpenSans font-semibold hover:bg-gray-300 rounded-full"
              onClick={handleNextMonth}
            >
            &gt;
            </button>
          </div>

          {/* Days of the week */}
          <div className="grid grid-cols-7 text-center text-gray-500 mb-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-base font-OpenSans font-normal">
                {day}
              </div>
            ))}
          </div>

          {/* Days of the month */}
          <div className="grid grid-cols-7 gap-2 text-center">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`p-1 rounded-full w-8 h-8 cursor-pointer text-base font-Inter font-normal ${
                  selectedDate === day
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                } ${typeof day === 'number' ? 'hover:bg-blue-400' : ''}`}
                onClick={() => typeof day === 'number' && handleDateClick(day)}
              >
                {typeof day === 'number' ? day : ''}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default CalendarPopover;
