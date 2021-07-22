import styled from "styled-components";
import Dropdown from "../components/base/Dropdown";
import PriceSlider from "./PriceSlider";

const options = [
  {
    label: "Default",
    action: "sortByNameAsc",
  },
  {
    label: "Popularity",
    action: "sortByPop",
  },
  {
    label: "Newest products",
    action: "sortByDate",
  },
  {
    label: "Lowest products",
    action: "sortByLowest",
  },
  {
    label: "Highest products",
    action: "sortByHighest",
  },
  {
    label: "Name ascending",
    action: "sortByNameAsc",
  },
  {
    label: "Name descending",
    action: "sortByNameDesc",
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
