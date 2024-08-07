
import React from 'react'
import Loader from 'react-loaders'
import './contact.scss'
import AnimatedLetters from '../AnimatedLetters/animated'
import { useEffect, useRef, useState } from 'react'
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'




const Contact =()=> {
  const [letterClass, setLetterClass]=useState('text-animate')

  const refForm=useRef();

  useEffect(() =>{
      setTimeout(()=>{
          setLetterClass("text_animate_hover");
      }, 3000)
  }, [])

  const sendEmail=(e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bnnnwkm",
      "template_ghyr6jg",
      refForm.current,
      "wAv5Vln9gUtxnuAD6"
    )
    .then(
      () => {
        alert("Message successfully sent!");
        window.location.reload(false);
      },
      () => {
        alert("Failed to send the message, please try again");
      }
    );
};

  return(
  <>
  <div className="container contact-page">
    <div className='text-zone'>
      <h1>
        <AnimatedLetters 
        letterClass={letterClass} 
        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15}
        />
      </h1>
      <p>
        I am interested in freelance opportunities - especially on ambitious
        or large projects. However, if you have any other requests or
        questions, don't hesitate to contact me using below form either.
      </p>
      {/* form section */}

      <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        {/* main info section */}
        <div className="info-map">
          Sachin Mondal,
          <br />
          India, West Bengal
          <br />
          North 24 Parganas,
          <br />
          Kolkata
          <br />
          <span>thesachinkumar16@gmail.com</span>
        </div>

        {/* for map */}

        <div className='map-wrap'>
          <MapContainer center={[23.677291, 86.821871]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[23.677291, 86.821871]}>
              <Popup>Sachin lives here, come over for a cup of coffee</Popup>

            </Marker>

          </MapContainer>

        </div>



  </div>
  <Loader type='pacman'/>
  </>
  )
}


export default Contact