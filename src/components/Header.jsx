import styled, { css } from "styled-components";
import Button from "./base/Button";
import SearchBar from "./SearchBar";
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
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../redux/features/cartSlice";

const Header = (props) => {
  const cartCount = useSelector(selectCartItemsCount);
  const [scroll, setScroll] = useState(false);
  const [searchbarHidden, setSearchbarHidden] = useState(false);
  library.add(faBars, faShoppingBasket, faSearch, faMapMarkerAlt);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        setScroll(window.scrollY > 5);
      },
      { passive: true }
    );
    return () => setScroll(false);
  }, []);

  const handleSearchClick = () => {
    setSearchbarHidden(!searchbarHidden);
  };

  return (
    <>
      <Container scrolled={scroll}>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
        <Button icon={faBars} />
        <Link to={`/Checkout`}>
          <Button icon={faShoppingBasket}>
            <CountContainer>{cartCount > 0 ? cartCount : null}</CountContainer>
          </Button>
        </Link>
        <Button icon={faSearch} onClick={() => handleSearchClick()} />

        <Container search scrolled={scroll}>
          {searchbarHidden ? <SearchBar header scrolled={scroll} /> : null}
        </Container>
      </Container>
    </>
  );
};

export default Header;

const Container = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  height: 8rem;
  background-color: ${(p) => (p.search ? "none" : p.theme.buttonPrimary)};
  box-shadow: ${(p) =>
    p.search
      ? "none"
      : `rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px`};
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
          @media (max-width: 770px) {
            top: 0rem;
            left: 0;
            width: 100%;
          }
        `}
  ${(p) =>
    p.search
      ? css`
          top: 8rem;
          left: 0;
          background-color: "";
          @media (max-width: 770px) {
            top: 8rem;
            left: 0;
            width: 100%;
          }
        `
      : ""}
`;

const Logo = styled.div`
  background-image: url(${logo});
  background-position: center;
  background-size: cover;
  width: 20rem;
  height: 100%;
  cursor: pointer;
`;

const CountContainer = styled.div`
  z-index: 999;
  font-size: 2rem;

  font-weight: 800;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledLink = styled(Link)`
  @media (max-width: 770px) {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    background-color: white;
  }
`;
