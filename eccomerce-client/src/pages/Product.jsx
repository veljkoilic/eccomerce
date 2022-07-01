import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Newsletter } from "../components/Newsletter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useState, useEffect } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { mobile } from "../responsive";

export const Product = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  useEffect(() => {
    console.log(id);
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        console.log(res);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (operation) => {
    if (operation == "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    }
    if (operation == "inc") {
      setQuantity(quantity + 1);
    }
  };
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    dispatch(addProduct({...product, quantity, color, size}));
  };

  return (
    <Container>
      <Announcement />
      <Header />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} alt="" />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color && product.color.map((c) => <FilterColor color={c} key={c} onClick={() => setColor(c)} />)}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              >
                {product.size && product.size.map((s) => <FilterSizeOption key={s}>{s}</FilterSizeOption>)}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <FontAwesomeIcon icon={faMinus} onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <FontAwesomeIcon icon={faPlus} onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  ${mobile({
    flexDirection: "column"
  })}
`;
const ImgContainer = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "center"
  })}
`;
const Image = styled.img`
  /* width: 100%; */
  /* align-self: flex-end; */
  height: 60vh;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 4;
  padding: 0 50px;
`;
const Title = styled.h1`
  margin-top: 20px;
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0;
  width: 70%;
  ${mobile({
    width: "100%"
  })}
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 30px 0;
  ${mobile({
    width: "100%"
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 23px;
  height: 23px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 3px double white;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
  transition: 0.3s;
  position: relative;
  &:hover {
    transition: 0.3s;
    transform: scale(1.3);
    //Following two rules smoothen out the rendering when performing transforms.
    transform-origin: 0% 0;
    backface-visibility: hidden;
  }
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 60%;
  ${mobile({
    width: "100%"
  })}
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  
  svg {
    cursor: pointer;
  }
`;
const Amount = styled.span`
  padding: 5px 9px;
  border-radius: 10px;
  border: 1px solid teal;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 1px solid teal;
  background-color: #fff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: teal;
    transition: 0.3s;
    color: #fff;
  }
`;
