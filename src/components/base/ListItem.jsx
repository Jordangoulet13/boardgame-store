import styled from "styled-components";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = ({ name }) => {
  return (
    <StyledItem>
      <FontAwesomeIcon icon={faChevronRight} size="lg" />
      <span>{name}</span>
    </StyledItem>
  );
};

export default ListItem;

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  span {
    opacity: 0.5;
    cursor: pointer;
    font-size: 1.5rem;
    font-family: ${(p) => p.theme.tertiaryfontFamily};
    margin-left: 10px;
    &:hover {
      opacity: 1;
    }
  }
`;
