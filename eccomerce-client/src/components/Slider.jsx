import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { sliderItems } from "../data";

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      if (slideIndex === 0) {
        setSlideIndex(sliderItems.length-1);
      } else {
        setSlideIndex(slideIndex - 1);
      }
    }
    if (direction === "right") {
      if (slideIndex === sliderItems.length-1) {
        setSlideIndex(0);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }
  };
  const sliderElements = sliderItems.map((item) => {
    return (
      <Slide className="slide" bg={item.bg} key={item.id}>
        <ImgContainer>
          <Image src={item.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{item.title}</Title>
          <Desc>{item.desc}</Desc>
          <Button> <svg><rect></rect></svg> Shop now!</Button>
        </InfoContainer>
      </Slide>
    );
  });
  return (
    <Container>
      <Arrow
        direction="left"
        onClick={() => {
          handleClick("left");
        }}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </Arrow>
      <Wrapper className="wrapper" order={slideIndex}>{sliderElements}</Wrapper>
      <Arrow
        direction="right"
        onClick={() => {
          handleClick("right");
        }}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </Arrow>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 1;
    transition: 0.3s;
  }
`;
const Wrapper = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: 1s;
  /* transform: translate(0vw); */
  transform: translate(-${props=>props.order}00vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  /* padding: 70px; */

  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: flex-end;
`;
const Image = styled.img`
  height: 80%;
  margin-left: 50px;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px 15px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  position: absolute;
  svg, rect{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: transparent;
  }
  rect{
      stroke: #000;
      stroke-width: 4;
      transition: 2s;
      stroke-dasharray:  50 200;
      stroke-dashoffset: 300;
  }
  &:hover rect{
    stroke-dasharray: 330 50;
    stroke-dashoffset: 0;
  }
  
`;
