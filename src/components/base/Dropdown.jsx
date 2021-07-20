import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dropdown = ({ options, label }) => {
  const [open, setOpen] = useState(false);

  const RenderedOptions = () =>
    options.map((option) => {
      return (
        <OptionContainer onClick={() => option.action}>
          <ArrowContainer>
            <FontAwesomeIcon icon={faChevronRight} size="lg" />
          </ArrowContainer>
          <StyledLabel>{option.label}</StyledLabel>
        </OptionContainer>
      );
    });

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
  ${ArrowContainer} {
  }
  &:hover {
    color: black;
    cursor: pointer;
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
