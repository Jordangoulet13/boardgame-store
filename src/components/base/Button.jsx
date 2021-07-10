import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
  return (
    <Container>
      <StyledFontAwesomeIcon icon={props.icon} size="2x" />
    </Container>
  );
};

export default Button;

const Container = styled.div`
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.buttonPrimary};
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: white;
`;
