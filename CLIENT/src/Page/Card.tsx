import { FC } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { backPage } from "../utils/constant";

interface Props {}
const Card: FC<Props> = () => {
  const navaigate = useNavigate();
  return (
    <CardPage>
      <CardWrapper className="card">
        <Content>
          <Front className="front">
            <h1>Signature</h1>
            <p>
              7.7 deck<span>2018</span>
            </p>
            <Price>$ 89.00</Price>
          </Front>
          <Right>
            <h2>Signature</h2>
            <ul>
              <li>Width 7.7"</li>
              <li>Length 31.75"</li>
              <li>Wheelbase 14"</li>
              <li>Nose 6.875"</li>
              <li>Tail 6.25"</li>
            </ul>
            <Button
              onClick={() => {
                navaigate(backPage.prevPage);
              }}
            >
              Back to Home
            </Button>
          </Right>
        </Content>
      </CardWrapper>
      <ImageWrapper>
        <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/577128/deck.png" />
      </ImageWrapper>
    </CardPage>
  );
};
//
export default Card;

//
const Float = keyframes`
    0% {
    transform: translateZ(20px);
    }
  100%{
    transform: translateY(-21px) translateX(-13px) translateZ(30px);
  }
`;
//
const FadeIn = keyframes`
    0%{
    opacity: 0.33;
    transform: scale(.89);
  }
`;
//
const CardPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-image: linear-gradient(
    -55deg,
    rgba(50, 45, 55, 1) 0%,
    rgba(101, 96, 106, 1) 100%
  );
  color: #f5f5f5;
  font-family: "Exo 2";
  font-weight: 300;
  animation: ${FadeIn} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) 1;
`;
const ImageWrapper = styled.div`
  position: absolute;
  margin-top: 80px;
  margin-left: 220px;
  pointer-events: none;
  backface-visibility: hidden;
  animation: ${Float} 4s cubic-bezier(0.39, 0.575, 0.565, 1) infinite alternate;
`;
const CardWrapper = styled.div`
  position: relative;
  height: 480px;
  transition: all 0.8s linear;
  ul {
    margin-left: 21px;
    padding: 0;
    font-size: 16px;
    font-weight: 300;
    list-style: none;
  }
  li {
    padding-bottom: 8px;
    position: relative;
  }
  li:before {
    content: "x";
    position: absolute;
    left: -21px;
    opacity: 0.55;
  }
  h1,
  h2 {
    margin: 0;
    font-size: 38px;
    letter-spacing: -0.25px;
    transform: translateX(-44px);
    font-family: "Sarala";
    font-weight: 700;
  }

  h2 {
    font-size: 21px;
    transform: translateX(-34px);
  }

  p {
    margin: 0;
    font-weight: 300;
    font-size: 16px;
  }

  span {
    margin-left: 13px;
    opacity: 0.55;
  }

  &:hover ~ ${ImageWrapper} {
    img {
      transform: scale(0.9) translateX(77%) translateY(90%) rotateZ(80deg);
    }
  }
`;
const Content = styled.div`
  width: 320px;
  height: 450px;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-140px);
  transition: transform 350ms cubic-bezier(0.39, 0.575, 0.565, 1);
  cursor: pointer;
  div {
    position: absolute;
    width: 385px;
    height: 480px;
    padding: 34px 21px;
    transition: all 350ms cubic-bezier(0.39, 0.575, 0.565, 1);
  }
`;
const Front = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(145, 141, 144, 1) 0%,
    rgba(92, 91, 94, 0) 100%
  );
  transform: rotateY(0deg) translateZ(160px);
  border-radius: 34px 3px 0 0;
  transition: all 0.5s linear;
  ${CardWrapper}:hover & {
    opacity: 0;
    transform: rotateY(-90deg) translateZ(160px);
  }
`;
const Price = styled.p`
  position: absolute;
  bottom: 34px;
  left: 21px;
  font-size: 34px;
  opacity: 0.34;
`;
const Right = styled.div`
  background-image: linear-gradient(
    0deg,
    rgba(145, 141, 144, 1) 0%,
    rgba(92, 91, 94, 0) 100%
  );
  opacity: 0.08;
  transform: rotateY(90deg) translateZ(160px);
  border-radius: 0 0 3px 34px;
  transition: all 0.8s linear;
  ${CardWrapper}:hover & {
    opacity: 1;
    transform: translateZ(0) rotateY(0);
    button {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  transform-origin: top right;
  transition: transform 800ms cubic-bezier(0.39, 0.575, 0.565, 1);
  transition-delay: 100ms;
  transform: translateX(21%) rotateZ(13deg) skewX(3deg);
  pointer-events: none;
`;

const Button = styled.button`
  position: absolute;
  right: 15px;
  bottom: 10px;
  border: none;
  box-shadow: none;
  background: none;
  color: inherit;
  font-family: "Exo 2";
  font-weight: 300;
  font-size: 15px;
  letter-spacing: -0.25px;
  font-weight: 700;
  padding: 13px 34px;
  border-radius: 55px 55px 21px 55px;
  opacity: 0;
  background-image: linear-gradient(
    130deg,
    rgba(117, 51, 165, 1) 50%,
    rgba(51, 46, 57, 0.89) 100%
  );
  background-size: 125% 100%;
  background-position: right;
  cursor: pointer;
  box-shadow: 8px 5px 13px rgba(34, 34, 34, 0.08);

  transition: all 150ms cubic-bezier(0.39, 0.575, 0.565, 1);
  transform-origin: right bottom;
`;
