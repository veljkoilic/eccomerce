import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import store from "../redux/store";
import { changeAmount, removeFromCart } from "../redux/cartRedux";
import { useEffect } from "react";
import { mobile, tablet } from "../responsive";

export const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const productsElements = cart.products.map((product, index) => {
    return (
      <Product>
        <ProductDetail>
          <Image src={product.img} />
          <Details>
            <ProductName>
              {product.title}
            </ProductName>
            <ProductId>
              <b>ID: </b> {product._id}
            </ProductId>
            <ProductColor color={product.color} />
            <ProductSize>
              <b>Size: </b> {product.size}
            </ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <FontAwesomeIcon
              icon={faPlus}
              onClick={() => {
                dispatch(changeAmount({ index, operation: "inc", productPrice: product.price }));
              }}
            />
            <ProductAmount>{product.quantity}</ProductAmount>
            <FontAwesomeIcon
              icon={faMinus}
              onClick={() => {
                dispatch(changeAmount({ index, operation: "dec", productPrice: product.price, quantity:cart.quantity }));
              }}
            />
          </ProductAmountContainer>
          <ProductPrice>${(product.price * product.quantity).toFixed(2)}</ProductPrice>
        </PriceDetail>
      </Product>
    );
  })
  return (
    <Container>
      <Announcement />
      <Header />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>

          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            {console.log(cart)}
            {productsElements.length === 0 ? <p>No products in cart</p> : productsElements}
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 0.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -0.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText type="total">Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total.toFixed(2)}</SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>Checkout Now</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  width: 80%;
  margin: 0 auto;
  padding-bottom: 150px;
  ${mobile({
    width: "95%",
    padding: '0'
  })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;

`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(prop) => (prop.type === "filled" ? "none" : "2px solid black")};
  background-color: ${(prop) => (prop.type === "filled" ? "black" : "transparent")};
  color: ${(prop) => (prop.type === "filled" ? "white" : "black")};
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    background-color: teal;
    color: #fff;
  }
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({
    flexDirection: "column"
  })}
`;
const Info = styled.div`
  flex: 3;
  margin-top: 50px;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 30px 20px;
  /* margin: 10px 0; */
  border-right: 1px solid #eee;
  &:last-of-type {
    border-bottom: none;
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  /* width: 200px; */
  height: 200px;
  align-self: center;
  ${tablet({
    height: "150px",
    
  })}
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > * {
    margin-top: 10px;
  }
`;
const ProductName = styled.h1`
  ${mobile({
    fontSize: "18px"
  })}`;
const ProductId = styled.span`
${tablet({
  display: "none"
})}
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 1px solid black;
`;
const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  svg {
    cursor: pointer;
  }
`;
const ProductAmount = styled.span`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 200;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-left: 0px;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 30px 30px 50px 30px;
  height: max-content;
  position: sticky;
  top: 239px;
`;
const SummaryTitle = styled.h1`
  font-weight: 500;
`;
const SummaryItemPrice = styled.span``;
const SummaryItemText = styled.span``;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  &:last-of-type ${SummaryItemPrice}, &:last-of-type ${SummaryItemText} {
    font-weight: 500;
    font-size: 24px;
  }
`;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  font-weight: 600;
  border: none;
  border: 2px solid black;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    background-color: #fff;
    color: #000;
  }
`;
