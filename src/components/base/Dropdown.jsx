import React, { useState } from "react";
import styled from "styled-components";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  sortByDate,
  sortByLowest,
  sortByHighest,
  sortByNameAsc,
  sortByNameDesc,
  sortByPop,
} from "../../redux/features/itemSlice";

const Dropdown = ({ options, label }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // let { category } = useParams();
  // if (category) {
  //   key = category.toLowerCase().replace(/\s/g, "");
  // }
  // const selector = getSelector(key);
  // const items = useSelector(selector);

  const handleClick = (option) => {
    switch (option.action) {
      case "sortByDate":
        dispatch(sortByDate());
        break;
      case "sortByPop":
        dispatch(sortByPop());
        break;
      case "sortByLowest":
        dispatch(sortByLowest());
        break;
      case "sortByHighest":
        dispatch(sortByHighest());
        break;
      case "sortByNameAsc":
        dispatch(sortByNameAsc());
        break;
      case "sortByNameDesc":
        dispatch(sortByNameDesc());
        break;
      default:
    }
  };

  const RenderedOptions = () => (
    <RenderedOptionsContainer>
      {options.map((option) => {
        return (
          <OptionContainer
            onClick={() => handleClick(option)}
            key={option.label}
          >
            <ArrowContainer>
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </ArrowContainer>
            <StyledLabel>{option.label}</StyledLabel>
          </OptionContainer>
        );
      })}
    </RenderedOptionsContainer>
  );

  return (
    <Container>
      <ContentContainer onClick={() => setOpen(!open)}>
        <StyledLabel>{label}</StyledLabel>
        <ArrowContainer open={open}>
          <FontAwesomeIcon icon={faChevronDown} size="lg" />
        </ArrowContainer>
      </ContentContainer>
      {open ? (
        <Container>
          <RenderedOptions />
        </Container>
      ) : null}
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  height: 100%;
  border-bottom: 1px solid lightgrey;
  @media (max-width: 900px) {
    border: none;
    height: 10rem;
    z-index: 1;
    position: absolute;
  }
`;
const ArrowContainer = styled.div`
  padding: 0 1.5rem;
  color: grey;
  transform: ${(p) => (p.open ? "rotate(180deg)" : "")};
  &:hover {
    color: black;
    cursor: pointer;
  }
`;
const ContentContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid lightgrey;

  &:hover {
    color: black;
    cursor: pointer;
  }
  @media (max-width: 900px) {
    padding: 0;
    border: none;
  }
`;
const StyledLabel = styled.label`
  font-size: 1.8rem;
  font-family: ${(p) => p.theme.tertiaryfontFamily};
  color: grey;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const OptionContainer = styled.div`
  background-color: whitesmoke;
  display: flex;
  justify-items: center;
  align-items: center;
  padding: 1rem;
  overflow: hidden;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const RenderedOptionsContainer = styled.div`
  background-color: whitesmoke;
`;
