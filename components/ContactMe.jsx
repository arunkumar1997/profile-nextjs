import {Card } from "react-bootstrap";
import * as icon from 'react-icons/fa'
const Contactme =() => {
    return(
      <Card className="shadow text-center col-md-6  border-0 m-auto">
        <Card.Body>
          <div className="text-center">
            <p style={{fontSize : "1.7rem"}}>
              Get In Touch
            </p>
          </div>
          <li className="py-2" >
          <span className="px-2 text-black"><icon.FaEnvelope /></span>
            <span>
              arunkumarbhat88@gmail.com
            </span>
          </li>
          <li className="py-2" >
            <span className="px-2 text-black"><icon.FaPhoneAlt /></span>
            <span>
              (+91) 9901367710
            </span>
          </li>
          <li className="py-2" >

          <a  className="px-2 text-black" target="_blank" rel="noopener noreferrer" href="https://github.com/arunkumar1997"><span><icon.FaGithubSquare className="h1" /></span></a>

          <a className="px-2 text-black pt-1" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/arunkumar-bhat-889b01144/"><span><icon.FaLinkedin className="h1"/></span></a></li>
          
        </Card.Body>
      </Card>
    )
}

export default Contactme