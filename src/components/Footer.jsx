import BookingForm from "./BookingForm.jsx";
import Modal from "react-modal";
import { useState } from "react";
import linkedin from "./../linkedin.png";
import facebook from "./../facebook.png";
import insta from "./../instagram.png";
import youtube from "./../youtube.png";

function Footer() {
 

  return (
    <footer className="App-Footer">
        <img src={linkedin} alt="" id="icon1"/>
        <img src={facebook} alt="" id="icon2"/>
        <img src={insta} alt="" id="icon3"/>
        <img src={youtube} alt="" id="icon4"/>
    </footer>
  );
}

export default Footer;