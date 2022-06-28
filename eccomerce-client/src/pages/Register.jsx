import styled from "styled-components";
import Header from "../components/Header";

export const Register = () => {
  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          <Title>Create an Account</Title>
          <Form>
            <Input placeholder="Name" />
            <Input placeholder="Lastname" />
            <Input placeholder="Username" />
            <Input placeholder="E-mail" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              dada in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>Create</Button>
          </Form>
        </Wrapper>
      </Container>
    </div>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgb(0, 185, 189);
  background: linear-gradient(
    180deg,
    rgba(0, 185, 189, 1) 0%,
    rgba(0, 138, 142, 1) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #fff;
  @media only screen and (max-width: 800px) {
    width: 70%;
  }
`;
const Title = styled.h1`
  font-size: 24px;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0;
  width: 100%;
`;
const Button = styled.button`
  border: none;
  padding: 10px 25px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
`;
