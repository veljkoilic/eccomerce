import styled from "styled-components";
import {Link}  from "react-router-dom";

export const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Image src={category.img} />
      <Link to= {`/products/${category.cat}`}>
        <Info>
          <Title>{category.title}</Title>
          <Button>Shop now</Button>
        </Info>
      </Link>
    </Container>
  );
};
const Title = styled.h1`
  color: #fff;
  font-size: 50px;
  transition: 0.3s;
  text-align: center;
`;
const Button = styled.button`
  background-color: transparent;
  border: 2px solid white;
  padding: 10px 20px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  margin-top: 10px;
  letter-spacing: 2px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    color: darkgray;
    background-color: #fff;
  }
`;
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  letter-spacing: 1px;
  transition: 0.3s;
  &:hover ${Title} {
    transition: 0.3s;
    letter-spacing: 8px;
  }
  &:hover ${Button} {
    padding: 15px 25px;
  }
`;
const Image = styled.img`
  height: 600px;
  width: 100%;
  margin-left: 5px;
  object-fit: cover;
  -webkit-box-shadow: 0px 0px 44px 7px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 44px 7px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
