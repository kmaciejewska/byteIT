import React, { useState } from "react";
import HeroImg from "../images/hero.png";
import {
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../components/ButtonElement";
import "./Hero.scss";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function Hero() {
  const [hover, setHover] = useState({
    btn1: false,
    btn2: false,
  });

  const onHover = (event) => {
    console.log(event.target.name);
    setHover({
      [event.target.name]: !hover[event.target.name],
    });
  };

  return (
    <div className="hero">
      <div className="hero-content">
        <HeroH1>Hello, I am Karolina</HeroH1>
        <HeroP>I code things.</HeroP>
        <HeroBtnWrapper>
          <Button
            to="portfolio"
            name="btn1"
            primary={true}
            big={false}
            fontBig={true}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            See my work {hover.btn1 ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <Button
            to="contact"
            name="btn2"
            primary={false}
            big={false}
            fontBig={true}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Let's chat {hover.btn2 ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </div>

      <div class="container">
        <div class="effect lavinia">
          <div class="buttons">
            <a href="#" title="Join me on Facebook">
              <i aria-hidden="true">
                <FaFacebookF />
              </i>
            </a>
            <a href="#" title="Join me on Instagram">
              <i aria-hidden="true">
                <FaInstagram />
              </i>
            </a>
            <a href="#" title="Join me on GitHub">
              <i aria-hidden="true">
                <FaGithub />
              </i>
            </a>
            <a href="#" class="in" title="Join me on Linked In">
              <i aria-hidden="true">
                <FaLinkedinIn />
              </i>
            </a>
          </div>
        </div>
      </div>

      <div className="img-container">
        <img src={HeroImg} />
      </div>
    </div>
  );
}
