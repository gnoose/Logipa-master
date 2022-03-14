import React, { useState } from 'react'
import Calendar from 'react-calendar'
// import dayGridPlugin from '@fullcalendar/daygrid'
import DefaultLayout from "../layouts/default";
// import 'react-calendar/dist/Calendar.css';
import "../styles/calendar.module.css"


const Calendare = () => {
  const [date, setDate] = useState(new Date());
  const onChange=(date)=>{
    setDate(date);
  }
  
  return (
    <DefaultLayout>
       <div className="calendar" style={{display:"flex", justifyContent:"center",}}>
          <Calendar onChange={onChange} value={date} style={{height : "600px"}} />   
      </div>
		</DefaultLayout>
  )
}

export default Calendare