//import logo from './logo.svg';
import './App.css';
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'
import Container from "react-bootstrap/Container";
import { Parallax } from "react-parallax";
import MyNavbar from './components/my-navbar/mynavbar.component';
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Experience from './pages/experience/experience.component';
//import ProjectTimeline from './components/projects-timeline/projects-timeline.component';
import Contact from './pages/contact-form/contact-form.component';
import FooterPanel from './components/footer/footer.component';
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
       <MyNavbar />
       <MyCarousal />
       <TitleMessage />
       <Particles
        className="particles particles-box"
        params={particlesOptions}
      />

       <div>
         <Parallax 
            blur={{ min: -30, max: 30 }}
            bgImage={require("./assets/img/parallex/background.webp")}
            bgImageAlt=""
            strength={-200}>
              <Container className="container-box rounded">
                <Fade duration={500}>
                  <About />
                </Fade>
              </Container>
          </Parallax>
       </div>

       <div>
              <Container className="container-box rounded">
                <Slide bottom duration={500}>
                     <hr />
                    <Skills/>
                </Slide>
              </Container>
       </div>

       <div>
         <Parallax 
            blur={{ min: -30, max: 30 }}
            bgImage={require("./assets/img/parallex/background.webp")}
            bgImageAlt=""
            strength={-200}>
              <Container className="container-box rounded">
                <Fade duration={500}>
                  <Experience />
                </Fade>
              </Container>
          </Parallax>
       </div>

       {/** TimeLine */}
       {/** 
       <div>
              <Container className="container-box rounded">
                <Slide bottom duration={500}>
                     <hr />
                    <ProjectTimeline />
                </Slide>
              </Container>
       </div>
       */}

       {/**Contact*/}
       <div>
         <Parallax 
            blur={{ min: -30, max: 30 }}
            bgImage={require("./assets/img/parallex/background.webp")}
            bgImageAlt=""
            strength={-200}>
              <Container className="container-box rounded">
                <Fade duration={500}>
                  <hr />
                  <Contact />
                </Fade>
              </Container>
          </Parallax>
       </div>

       {/**Footer*/}
       <hr />
       <FooterPanel />

    </div>
  );
}

export default App;
