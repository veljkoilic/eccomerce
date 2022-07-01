import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ACME</Logo>
        <Desc>
          Feel free to follow us on all major social media platforms!
          <br />
          Get updates, deals, promotions and more!
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3b5999">
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>
          <SocialIcon color="#E4405f">
            <FontAwesomeIcon icon={faInstagram} />
          </SocialIcon>
          <SocialIcon color="#55ACEE ">
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon color="#e60023">
            <FontAwesomeIcon icon={faPinterest} />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Mens Fashion</ListItem>
          <ListItem>Womans Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms of service</ListItem>
          <ListItem>Privacy Policy</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FontAwesomeIcon icon={faMapMarker} /> 456 Some Street, South C. 9485
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faPhone} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <FontAwesomeIcon icon={faEnvelope} /> info@acme.com
        </ContactItem>
        <Payment src="https://www.nicepng.com/png/full/395-3955693_paypal-payment-method-logo.png" />
      </Right>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 20px 100px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 20px 20px 100px;

`;
const Title = styled.h3`
  margin-bottom: 30px;
  align-self: flex-start;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  padding: 20px 20px 20px 100px;

h3{
    /* align-self: flex-end; */
}
  flex: 1;
  /* padding: 20px 100px 20px 20px; */
  display: flex;
  /* align-items: flex-end; */
  flex-direction: column;
`;
const ContactItem = styled.p`
  margin-top: 7px;
  svg{
      margin-right: 5px;
      font-size: 18px;
  }
`;
const Logo = styled.h3`
  font-size: 35px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 220px;
  /* align-self: flex-end; */
  margin: 10px 5px 0 0;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    transition: 0.3s;
  }
  &:hover svg {
    width: 25px;
    height: 25px;
    transition: 0.3s;
  }
`;
