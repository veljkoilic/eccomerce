import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";


export const Product = ({ product }) => {
  return (
    <Container>
      <Image src={product.img}></Image>
      <Info>
        <Icon>
          <FontAwesomeIcon icon={faCartShopping} />
        </Icon>
        <Link to={`/product/${product._id}`}>
          <Icon>
            <FontAwesomeIcon icon={faSearch} />
          </Icon>
        </Link>
        <Icon>
          <FontAwesomeIcon icon={faHeart} />
        </Icon>
      </Info>
    </Container>
  );
};

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const Image = styled.img`
  height: 90%;
  z-index: 2;
  transition: 0.3s;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  position: relative;
  transition: 0.3s;
  &:hover ${Info} {
    transition: 0.3s;
    opacity: 1;
  }
  &:hover ${Image} {
    transition: 300ms;
    height: 100%;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: 0.2s;
  opacity: 0.65;
  cursor: pointer;
  &:hover {
    opacity: 1;
    transition: 0.2s;
    background-color: #d3e1e1;
    color: #fff;
    transform: scale(1.2);
  }
`;
