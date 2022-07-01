import styled from "styled-components"
import { mobile, tablet } from "../responsive"

export const Announcement = () => {
  return (
    <Container>Awesome Offer! Free shipping on orders over $50!</Container>
  )
}
const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: #fff;
    letter-spacing: 0.5px;
    word-spacing: 0.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14 px;
    font-weight: 500;
    text-align: center;
    ${tablet({
     padding: "5px 20px"
    })}
    
    ${mobile({
     padding: "20px"
    })}

`
