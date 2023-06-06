import React from 'react'
import './About.css';
import profilePhoto from '../../Assets/PictureCV.jpeg'
import myCV from '../../Assets/Resume - Avinno Satta.pdf'



const About = () => {

	const handleDownload = () => {
		const link = document.createElement('a');
		link.href = myCV;
		link.download = 'Resume - Avinno Satta.pdf';
		link.click();
	}

  return (
	<div className="about-section">
	<div className="about-me">
		<div className='about-me-photo'>
			<img src={profilePhoto} alt='Profile' />
		</div>
		<div className='about-me-text'>
			<div className='about-me-title'>
				<h2>Hey There!</h2>
			</div>
			<div className='about-me-content'>

		<p>My name is Satta and I am a frontend developer currently based in Stockholm.
		<br></br>
		 Although I am coding now, I used to work in HR before and so have a solid <br></br> foundation on people-centric work. I enjoy learning new things and currently<br></br> 
		 I'm open to job opportunities where I can contribute, learn and grow. <br></br>If you have something that matches my skills and experience then ping me.</p>
		 </div>
		 <div className='about-me-buttons'>
			<button onClick={handleDownload}> DOWNLOAD MY CV</button>
			<p>Scroll & Know more</p> 
			
		 </div>
		 </div>
		
	</div>
	</div>
  )
}

export default About