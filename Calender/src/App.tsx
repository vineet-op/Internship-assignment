// import { useState } from 'react'
import './App.css'
import EventCalender from './components/EventCalender'
import { addDays, subDays } from 'date-fns'

function App() {


  return (
    <div>
      <EventCalender events={[
        { date: subDays(new Date(), 6), title: "Post Video" },
        { date: subDays(new Date(), 1), title: "Edit Video" },
        { date: addDays(new Date(), 3), title: "Code" }
      ]}
      />
    </div>
  )
}

export default App
