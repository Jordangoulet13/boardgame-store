import styled from "styled-components";
import Dropdown from "../components/base/Dropdown";
import PriceSlider from "./PriceSlider";

const options = [
  {
    label: "Default",
    value: "red",
  },
  {
    label: "Popularity",
    value: "green",
  },
  {
    label: "Newest products",
    value: "blue",
  },
  {
    label: "Lowest products",
    value: "blue",
  },
  {
    label: "Highest products",
    value: "blue",
  },
  {
    label: "Name ascending",
    value: "blue",
  },
  {
    label: "Name descending",
    value: "blue",
  },
];
const brands = [{ label: "All brands" }];

const SortBar = () => {
  return (
    <ContainerBar>
      <CategoryHeading>Sort by</CategoryHeading>
      <Dropdown label="Popularity" options={options} />
      <CategoryHeading>Filter by</CategoryHeading>
      <Dropdown label="All brands" options={brands} />
      <CategoryHeading>Price</CategoryHeading>
      <StyledPriceSlider />
    </ContainerBar>
  );
};

export default SortBar;

const ContainerBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  padding-left: 3rem;
`;

const CategoryHeading = styled.h1`
  font-weight: 500;
  &:first-child {
    margin-top: 0px;
  }
`;

const StyledPriceSlider = styled(PriceSlider)``;
