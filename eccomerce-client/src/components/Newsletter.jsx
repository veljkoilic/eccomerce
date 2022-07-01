import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { mobile } from "../responsive";

export const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates for your favourite products.</Desc>
      <InputContainer>
        <Input placeholder="Your e-mail here..." />
        <Button>
          <FontAwesomeIcon icon={faPaperPlane} />
        </Button>
      </InputContainer>
    </Container>
  );
};
const Container = styled.div`
  height: 250px;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 5px;
`;
const Desc = styled.p`
  font-size: 24px;
  font-weight: 30;
  margin-bottom: 20px;
  text-align: center;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({
    width: "70%"
  })}
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 15px;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  svg {
    transition: 500ms;
  }
  &:hover svg {
    transition: 500ms;

    transform: scale(1.4);
  }
`;
