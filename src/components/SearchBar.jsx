import { useState } from "react";
import Button from "./base/Button";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const onInputChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Container>
      <StyledInput
        value={searchText}
        onChange={onInputChange}
        placeholder={props.placeholder}
      />
      <Button icon={faSearch} />
    </Container>
  );
};

export default SearchBar;

const StyledInput = styled.input`
  width: 100%;
  font-family: Arial;
  font-weight: 400;
  font-size: 2rem;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;

  &:focus {
    outline: none;
    transition: border-color ease-in 0.3s;
    border: 3px solid lightblue;
  }
`;

const Container = styled.div`
  display: flex;
  margin-bottom: 5rem;
  height: 8rem;
`;
