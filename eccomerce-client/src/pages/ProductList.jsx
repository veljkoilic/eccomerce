import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { Newsletter } from "../components/Newsletter";
import { Products } from "../components/Products";

export const ProductList = () => {
  const location = useLocation()
  const category = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")
  const handleFilters = (e)=>{
    const value = e.target.value;
    setFilters(prev=>{
     return {...prev,
      [e.target.name]:value}
    })
  }

  return (
    <Container>
      <Announcement />
      <Header />
      <Title>{category.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters = {filters} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  /* padding: 20px; */
`;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
const Select = styled.select`
padding: 10px;
margin-right: 20px;
background-color: transparent;
border: 1px solid darkgray;
width: 100px;

`;
const Option = styled.option`
background: #fff;
`;
