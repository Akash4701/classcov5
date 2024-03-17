import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles which you can override

function CalendarDate() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow p-4">
        <Calendar onChange={onChange} value={value} className="border-none" />
      </div>
    </div>
  );
}

export default CalendarDate;