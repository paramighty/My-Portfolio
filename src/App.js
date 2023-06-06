import React from "react";
import About from "./Components/About/About";
import Contact from "./Components/Contact";

import SideSocialMenu from "./Components/SideSocialMenu";
import Skills from "./Components/Skills";
import Carousel from "./Components/Carousel/Carousel";
import CarouselCard from "./Components/Carousel/CarouselCard";
import mosaiq from "./Assets/ImagesForCarousel/mosaiq.png";
import airjordan from "./Assets/ImagesForCarousel/airjordan.png";
import todoapp from "./Assets/ImagesForCarousel/todoapp.png";
import Projects from "./Components/Projects";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function App() {
  return (
    <div className="App">
      <div className="hero-section">
        <div className="social-container">
          <SideSocialMenu />
        </div>
        <About />
        <Projects />
        <div className="carousel-section">
          <Carousel>
            <CarouselCard description="This was my first shot at understanding and implenting React. In a true Hyper Island fashion, we did the work in group. This was the first time we learnt to do 3D as well. The repository is uploaded in my github profile.">
              <img src={airjordan} alt="cchobi 1" />
            </CarouselCard>
            <CarouselCard description="This project was aimed to enhance the user experience of Miner, a data mining software used for extracting insights and patterns from large data sets. It was done as a group project and our task was to redesign the user interface (UI) to make it more user-friendly and visually appealing.">
              <img src={mosaiq} alt="cchobi 2" />
            </CarouselCard>
            <CarouselCard description="This was a solo TodoApp project that was done by following a couple of youtube tutorials. The database used here for the backend is Postgres. The repository is available in my">
              <img src={todoapp} alt="chobi 3" />
            </CarouselCard>
          </Carousel>
        </div>

        <Skills />
      </div>

      <Contact />
    </div>
  );
}

export default App;
