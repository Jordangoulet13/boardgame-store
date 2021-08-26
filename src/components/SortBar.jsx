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
      <SortBarItem>
        <CategoryHeading>Sort by</CategoryHeading>
        <Dropdown label="Popularity" options={options} />
      </SortBarItem>
      <SortBarItem>
        <CategoryHeading>Filter by</CategoryHeading>
        <Dropdown label="All brands" options={brands} />
      </SortBarItem>
      <SortBarItem>
        <CategoryHeading>Price</CategoryHeading>
        <StyledPriceSlider />
      </SortBarItem>
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
  @media (max-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 2rem 5rem 2rem;
    width: auto;
    padding: 0;
    > * {
      margin: 0;
    }
  }
`;

const CategoryHeading = styled.h1`
  font-weight: 500;
  &:first-child {
    margin-top: 0px;
  }
`;

const SortBarItem = styled.div`
  @media (max-width: 900px) {
  }
`;

const StyledPriceSlider = styled(PriceSlider)``;
