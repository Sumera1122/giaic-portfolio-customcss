"use client";
import Header from "./components/header";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="leftside">
          <div className="homedetail">
            <h1>
              He <span>llo,</span>
            </h1>
            <h2>
              I'm <span> sumera.</span>
            </h2>
          </div>
          <h3> Front End developer</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            modi quidem, ab nemo nisi, impedit quo minus debitis tenetur
            consequatur provident voluptatibus nam magni fuga earum. Voluptate,
            ipsum expedita. Nesciunt consequuntur repudiandae nemo cum sit
            eligendi ullam. Dolore veritatis ab tempore optio iste ea possimus
            fugiat voluptatibus, et eligendi nisi, voluptatem quam minima?
            Impedit consequuntur cum illum cumque sequi facilis.
          </p>
          <div className="button">
            <button>
              <a href="\my pdf cv.pdf" download>
                Download Cv
              </a>
            </button>
          </div>

          <h3 className="socialheading">Social links.</h3>
          <div className="sociallinks">
            <a href="https://www.linkedin.com/in/sumera-mushtaque-7759bb1b5/">
              <BsLinkedin />
            </a>
            <a href="https://wa.me/03312156555">
              <FaWhatsapp />
            </a>
            <a href="mailto:sumeramushtaque993@gmail.com">
              <SiGmail />
            </a>
          </div>
        </div>
        {/* right side */}
        <div className="rightside">
          <div className="image">
            <img src="\images\image5.png" alt="Description of image" />
          </div>
        </div>
      </div>

      <About />
      <Skills />
      <Contact/>
    </div>
  );
};

export default Home;
