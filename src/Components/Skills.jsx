import React from 'react'
import './Skills.css'
import { GiBrain } from 'react-icons/gi';
import { FcReading } from 'react-icons/fc';
import { IoPersonAddSharp } from 'react-icons/io5';
import { GiNinjaMask } from 'react-icons/gi';
import { MdTravelExplore } from 'react-icons/md';
import { MdOutlineFoodBank } from 'react-icons/md';


const Skills = () => {
  return (
	<div className='skills-container'>
    <div className='skills-heading'>
      <h2> More About Me</h2>
    <div className='skills-body'>
      <div className='skills-body-personality'> 
        <div className='skills-body-personality-title'>
          <h3>What Maketh Me</h3></div>
        <div className='skills-body-personality-description'>
          <ul>
            <li>ADHD-Brain <GiBrain color='pink'/></li>
            <li>Voracious Reader <FcReading /></li>
            <li>Collaboration and Connection <IoPersonAddSharp color='blue'/></li>
            <li>Meme Ninja <GiNinjaMask color='red'/></li>
            <li>Travel <MdTravelExplore color='green'/></li>
            <li>Food <MdOutlineFoodBank color='orange' /></li>
          </ul> </div>
        </div>
    
      <div className='skills-body-tech'>
        <div className='skills-body-tech-heading'><h3>My Skills</h3></div>
        <div className='skills-body-tech-buttons'><button>HTML</button>
        <button>CSS</button> <button>Javascript</button> <button>React</button> <button>Github</button> <button>Node.js</button>
        <button>Express.js</button><button>PostgreSQL</button><button>Figma</button>
        </div>
      </div>
    </div>
    </div>


  </div>
  )
}

export default Skills