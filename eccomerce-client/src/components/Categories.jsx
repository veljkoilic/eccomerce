import styled from "styled-components";
import { categories } from "../data";
import { CategoryItem } from "./CategoryItem";
import { mobile, tablet } from "../responsive";

export const Categories = () => {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </Container>
  );
};
const Container = styled.div`
  /* display: flex; */
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  ${tablet({
      gridTemplateColumns: "1fr"

  })}
`;
