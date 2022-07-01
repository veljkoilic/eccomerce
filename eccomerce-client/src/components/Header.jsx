import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import store from "../redux/store";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";

function Header() {
  const cart = useSelector((state) => state.cart);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const getSearchProducts = async () => {
      try {
        const res = await publicRequest.get(
          searchInput
            ? "http://localhost:5000/api/products/search/" + searchInput
            : "http://localhost:5000/api/products/search/*"
        );
        console.log(res.data);
        setSearchedProducts(res.data);
      } catch (err) {}
    };
    getSearchProducts();
  }, [searchInput]);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              placeholder="Search here!"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <FontAwesomeIcon icon={faSearch} />
          </SearchContainer>
          <div className="searchResults">
            {searchedProducts.map((product) => {
              return (
                <Link
                  className="link"
                  to={`/product/${product._id}`}
                  onClick={() => setSearchInput("")}
                >
                  <span>
                    <img src={product.img} width="20px" alt="" />
                    {product.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </Left>
        <Center>
          <Link className="link" to="/">
            <Logo>ACME</Logo>
          </Link>
        </Center>
        <Right>

          <Link className="link" to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
            <Link className="link" to="/login">
            <MenuItem>Sign in</MenuItem>

            </Link>

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
  position: relative;
  .searchResults {
    position: absolute;
    top: 40px;
    left: 42px;
    background-color: white;
    width: 85%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    span {
      border-bottom: 1px solid lightgray;
      padding: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      &:hover {
        background-color: black;
        color: #fff;
      }
      img {
        width: 25px;
        padding: 0 5px;
      }
    }
  }
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
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
