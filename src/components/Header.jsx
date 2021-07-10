import styled from "styled-components";
import Button from "./base/Button";
import { Link } from "react-router-dom";
import {
  faBars,
  faShoppingBasket,
  faSearch,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img-logo.png";

const Header = (props) => {
  return (
    <Container>
      <Logo />
      <Button icon={faBars} />
      <Button icon={faShoppingBasket} />
      <Button icon={faSearch} />
      <Button icon={faMapMarkerAlt} />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: absolute;
  top: 5rem;
  left: 5rem;
  z-index: 999;
  display: flex;
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  width: 20rem;
  height: 8rem;
`;
