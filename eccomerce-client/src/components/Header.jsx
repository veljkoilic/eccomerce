import styled from "styled-components";
import mobile from "../responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import store from "../redux/store";
import { Link } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search here!" />
            <FontAwesomeIcon icon={faSearch} />
          </SearchContainer>
        </Left>
        <Center>
          <Link className="link" to="/">
            <Logo >ACME</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Link to="/cart" className="link">
              <FontAwesomeIcon icon={faCartShopping} />
              {cart.quantity > 0 && <span>{cart.quantity}</span>}
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 11;
  background-color: #fff;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  margin: 0 auto;
  max-width: 1024px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 7px 10px;
  svg {
    color: gray;
  }
`;
const Input = styled.input`
  border: none;
  margin: 0 5px;
  &:focus {
    outline: none;
  }
`;
const Center = styled.div`
  flex: 2;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;
const MenuItem = styled.div`
  cursor: pointer;
  span {
    transition: 1s all;
    color: #fff;
    font-size: 11px;
    padding: 2px 6.5px;
    border-radius: 1000px;
    background-color: blue;
    position: relative;
    top: -12px;
    left: -6px;
  }
`;

export default Header;
