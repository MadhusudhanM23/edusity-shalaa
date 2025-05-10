import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1aa7ace9-8821-43b1-8c0b-b297a707f646");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully", data);
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us message <img src= {msg_icon} alt="" /></h3>
            <p>Sending contact information ensures seamless communication, enabling timely responses and building connections. 
                It serves as a bridge to maintain professional or personal relationships effectively.</p>
            <ul>
                <li><img src={mail_icon} alt =""/>Conatct@xyz.com </li>
                <li><img src={phone_icon} alt =""/>+91-9008994554</li>
                <li> <img src={location_icon} alt =""/>Mysore Road Bengaluru<br/> IND </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter Your Name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter Your Mobile Number 'required/>
                <label>Write Your Messages Here...</label>
                <textarea name="message" rows="6" placeholder='Enter your message...'></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt=""/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact