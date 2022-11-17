import trash from "./../trashcan.png"
import edit from "./../editpen.png"

export default function SingleBooking({ date, room, time }) {

  return (
    <container className="singleBooking">

     <div className="room_class">
      <p className="room">Klasselokale: {room}</p>
      </div>

      <div className="date_class">
      <p className="date">Dato: {date}</p>
      </div>

      <div className="time_class">
      <p className="time">Tid: 11:04:03{time}</p>
      </div>

      <div className="ikoner_class">
      < img id="edit" src = {edit}/>
      </div>

      <div className="ikoner_class">
      <img id="trashcan" src ={trash}/>
      </div>      
      
    </container>
  );
}
