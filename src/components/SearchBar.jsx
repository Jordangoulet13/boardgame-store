import { useState } from "react";
import Button from "./base/Button";
import styled, { css } from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterBySearch } from "../redux/features/itemSlice";

const SearchBar = ({ header, history }) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const onInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmitSearch = (event) => {
    console.log("clicked");

    history.push(`/shop/Search : ${searchText}`);
  };

  const placeholder = "Search by product name, brand, category...";
  const smallPlaceholder = "Search....";
  return (
    <form onSubmit={(event) => handleSubmitSearch()}>
      <Container>
        <StyledInput
          value={searchText}
          onChange={onInputChange}
          placeholder={header ? smallPlaceholder : placeholder}
        />
        <Button icon={faSearch} onClick={handleSubmitSearch} />
      </Container>{" "}
    </form>
  );
};

export default withRouter(SearchBar);

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
