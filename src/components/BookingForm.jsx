import { useState } from "react";

export default function BookingForm() {
  const [room, setRoom] = useState(""); //Room
  const [date, setDate] = useState(""); // date
  const [time, setTime] = useState(""); // Time

  const handleRoom = (event) => {
    const input = event.target.value;
    setRoom(input);
  };
  const handleDate = (event) => {
    // date
    setDate(event.target.value);
  };

  const handleTime = (event) => {
    // Time
    setTime(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked");
    // Kald serveren og gem data
  };

  return (
    <form id="modalbox">
      {/* Trin bokse */}
      <container id="outerbox">

      {/* Trin 1 Time */}
      <div id="stepbox1">
        <h2>Trin 1</h2>
        <label>Vælg tidspunkt</label>
        <input
          type="time"
          placeholder="Vælg tid"
          name="time"
          value={time}
          onChange={handleTime}
          min="08:00" max="18:00" required
        />
      </div>

      {/* Trin 2 Lokale */}
      <div id="stepbox2">
      <h2>Trin 2</h2>
        <label>Vælg lokale</label>
        <select name="lokaledropdown">
        <option value="select">Vælg et lokale</option>
        <option value="1" onChange={handleDate}>1</option>
        <option value="2" onChange={handleDate}>2</option>
        <option value="3" onChange={handleDate}>3</option>
        <option value="4" onChange={handleDate}>4</option>
        <option value="5" onChange={handleDate}>5</option>
        <option value="6" onChange={handleDate}>6</option>
        <option value="7" onChange={handleDate}>7</option>
        </select>
      </div>

      {/* Trin 3 Dato */}
      <div id="stepbox3">
        <h2>Trin 3</h2>
        <label>Dato</label>
        <input
          type="text"
          placeholder="Dato - f.eks. 15-10-2022"
          name="date"
          value={date}
          onChange={handleDate}
        />
        
        <button onClick={handleSubmit}>Book</button>

      </div>
      </container>
    </form>
  );
}
