import styled, { css } from "styled-components";
import Button from "./base/Button";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faShoppingBasket,
  faSearch,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img-logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [scroll, setScroll] = useState(false);
  library.add(faBars, faShoppingBasket, faSearch, faMapMarkerAlt);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 5);
    });
  }, []);

  return (
    <Container scrolled={scroll}>
      <Link to="/">
        <Logo />
      </Link>
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
  height: 8rem;
  background-color: ${(p) => p.theme.buttonPrimary};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  ${(p) =>
    p.scrolled
      ? css`
          top: 0;
          left: 0;
          width: 100%;
          position: fixed;
        `
      : css`
          top: 5rem;
          left: 5rem;
        `}
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  width: 20rem;
  height: 100%;
  cursor: pointer;
`;
