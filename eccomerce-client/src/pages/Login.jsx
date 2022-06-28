import styled from "styled-components";
import Header from "../components/Header";

export const Login = () => {
  return (
    <div>
      <Header />
      <Container>
        <Wrapper>
          <Title>Sign In</Title>
          <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button>Log In</Button>
            <Link>Forgot your password?</Link>
            <Link>Create new account</Link>
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
const Link  = styled.a`
cursor: pointer;
&:hover{
  color: teal;
}
`
const Wrapper = styled.div`
  width: 20%;
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin:10px 0;
  padding: 10px;
`;
const Button = styled.button`
  border: none;
  padding: 10px 25px;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  margin-bottom: 10px;
`;
