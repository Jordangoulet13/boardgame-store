import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({ children, icon, ...props }) => {
  return (
    <Container {...props}>
      {icon ? <StyledFontAwesomeIcon icon={icon} size="2x" /> : null}
      <span>{children}</span>
    </Container>
  );
};

export default Button;

const secondaryButtonStyle = css`
  height: 6rem;
  background-color: ${(p) => p.theme.secondaryBackgroundColor};
  color: #fff;
  font-size: 2rem;
  min-width: 15rem;
  &:hover {
    color: ${(p) => p.theme.secondaryBackgroundColor};
    background-color: #fff;
    border: 2px solid ${(p) => p.theme.secondaryBackgroundColor};
  }
`;

const categoriesButtonStyle = css`
  height: 5.5rem;
  font-size: 2rem;
  color: #fff;
  width: 33%;
  &:hover {
    color: ${(p) => p.theme.buttonPrimary};
    background-color: #fff;
    border: 2px solid ${(p) => p.theme.buttonPrimary};
  }
`;
const getButtonStyles = (props) => {
  if (props.categories) {
    return categoriesButtonStyle;
  } else if (props.secondary) {
    return secondaryButtonStyle;
  }
};

const Container = styled.div`
  min-width: 8rem;
  height: 100%;
  display: flex;
  position: relative;

  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.buttonPrimary};
  @media (max-width: 770px) {
    width: 100%;
  }
  span {
    font-family: ${(p) => p.theme.secondaryfontFamily};
    font-weight: 300;
  }
  &:hover {
    cursor: pointer;
    background-color: ${(p) => p.theme.buttonSecondary};
  }
  ${getButtonStyles};
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
`;
