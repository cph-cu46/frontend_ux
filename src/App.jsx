import "./App.css";
import MainContent from "./components/MainContent";
import TheHeader from "./components/TheHeader";
import Name from "./Name";
import Footer from "./components/Footer"

import {useState} from 'react';
import Calendar from 'react-calendar'; 

function App() {
  return (
    <div className="App">
      <TheHeader />
      <Calendar />
      <MainContent />
      <Footer />
    </div>
  );
}

function App2() {
 const [date, setDate] = useState(new Date())

return (
 <div className="app">
  <div className="Overskrift">
  <p>Ny booking</p>
  </div>
   <div className="calendar-container">
     <Calendar onChange={setDate} value={date} id="kalender"/>
   </div>
   <div className="text-center">
      Selected date: {date.toDateString()}
   </div>
 </div>
  )
}

export default App;
