import React from 'react'
import './SideSocialMenu.css'
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";




const SideSocialMenu = () => {
  return (
<nav id="mynav">
      <ul>
        <li>
          <a href="https://github.com/paramighty" target="_blank" rel="noopener noreferrer">
            <VscGithubInverted size={30} className="social-icon" style={{ color: '#171515' }}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/avinnosatta/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin size={30} className="social-icon" style={{ color: '#0077b5' }}/>
          </a>	
        </li>
        <li>
          <a href="https://www.facebook.com/ap.satta.1" target="_blank" rel="noopener noreferrer">
            <AiOutlineFacebook size={30} className="social-icon" style={{ color: '#3b5998' }}/>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SideSocialMenu