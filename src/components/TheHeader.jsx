import BookingForm from "./BookingForm.jsx";
import Modal from "react-modal";
import { useState } from "react";
import logo from "./../logocph.png"
import SingleBooking from "./SingleBooking.jsx";
import MainContent from "./MainContent.jsx";

function TheHeader() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (

    <header className="App-header">


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create booking form"
      >
        <BookingForm />
      </Modal>

      <div className="Head">
        <div><img className="logocph" src={logo} alt="Logo" /></div>

        <div className="knapper_header">
          <button className="Header-knap" onClick={openModal}>Oversigt</button>

          <a className="header-link" href="./SingleBooking.jsx" activepage>
            <button className="Header-knap-to" >Mine bookinger</button>
          </a>
        </div>

      </div>
    </header>
  );
}

export default TheHeader;

