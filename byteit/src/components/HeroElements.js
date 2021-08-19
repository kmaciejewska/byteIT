import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  max-width: fit-content;
  display: inline-block;
  border-right: solid 3px white;
  white-space: nowrap;
  overflow: hidden;

  animation: animated-text 4s steps(29, end) 1s 1 normal both,
    animated-cursor 600ms steps(29, end) infinite;

  /* text animation */

  @keyframes animated-text {
    from {
      width: 0;
    }
    to {
      width: 472px;
    }
  }

  /* cursor animations */


  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin: 32px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 28px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 28px;
`;
