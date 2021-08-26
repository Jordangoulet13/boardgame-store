import styled from "styled-components";
import ListItem from "./base/ListItem";
// import { FaCcMastercard } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCcMastercard,
  faCcVisa,
  faCcPaypal,
  faFacebookF,
  faTwitter,
  faPinterest,
  faInstagram,
  faDiscord,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  library.add(
    faCcMastercard,
    faCcVisa,
    faCcPaypal,
    faFacebookF,
    faTwitter,
    faPinterest,
    faInstagram,
    faDiscord,
    faTwitch
  );
  return (
    <>
      <Container>
        <div>
          <Title> Vancouver</Title>
          <p>
            88 West Pender Street, Unit 1069 International Village (Tinseltown)
            Mall Vancouver, BC V6B 6N9
          </p>
          <p>778-373-0365</p>
          <p>Hours: 11-6:30 Mon-Sat // 11-5 Sun</p>
        </div>
        <div>
          <Title>New Westminster</Title>
          <p>
            810 Quayside Drive, Unit 106 New West River Market New Westminster,
            BC V3M 6B9
          </p>
          <p>604-553-4425</p>
          <p>Hours: 11-6 Wed-Mon // closed Tue</p>
        </div>
        <div>
          <Title>Information</Title>
          <ListItem name="About us" />
          <ListItem name="Newsletter sign-up" />
          <ListItem name="Loyalty program" />
          <ListItem name="MTG singles pricing" />
          <ListItem name="Donations" />
          <ListItem name="Jobs" />
          <ListItem name="Sitemap" />
        </div>
        <div>
          <Title>Customer service</Title>
          <ListItem name="Contact us" />
          <ListItem name="Terms & conditions" />
          <ListItem name="Privacy policy" />
          <ListItem name="Preorder FAQs" />
          <ListItem name="Shipping" />
          <ListItem name="Return policy" />
          <ListItem name="Missing puzzle pieces?" />
        </div>
      </Container>
      <Banner>
        <span>
          <StyledFontAwesomeIcon icon={faCcMastercard} size="2x" />
          <StyledFontAwesomeIcon icon={faCcVisa} size="2x" />
          <StyledFontAwesomeIcon icon={faCcPaypal} size="2x" />
        </span>
        <span className="acknowledgement">
          Rain City Games acknowledges that our work takes place on the unceded
          homelands of the xʷməθkʷəy̓əm (Musqueam), sel̓íl̓witulh (Tsleil Waututh),
          sḵwx̱wú7mesh (Squamish), and Qayqayt Coast Salish peoples.
        </span>
        <span>
          <StyledFontAwesomeIcon icon={faFacebookF} />
          <StyledFontAwesomeIcon icon={faTwitter} />
          <StyledFontAwesomeIcon icon={faInstagram} />
          <StyledFontAwesomeIcon icon={faPinterest} />
          <StyledFontAwesomeIcon icon={faDiscord} />
          <StyledFontAwesomeIcon icon={faTwitch} />
        </span>
      </Banner>
      <DateText>© 2021 Rain City Games</DateText>
    </>
  );
};

export default footer;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  justify-items: center;
  margin-top: 3rem;

  grid-gap: 3rem;
  div {
    p {
      font-size: 1.5rem;
      font-family: ${(p) => p.theme.tertiaryfontFamily};
      line-height: 2.5rem;
    }
  }

  @media (max-width: 770px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: 25rem 25rem;
    justify-items: flex-start;
  }
`;

const Title = styled.h1`
  font-weight: 400;
`;

const Banner = styled.div`
  display: grid;
  grid-template-columns: 0.75fr 2fr 1fr;
  place-items: center;
  align-items: flex-start;
  padding-top: 1.5rem;
  height: 9rem;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  margin: 5rem 0;

  .acknowledgement {
    text-align: center;
    font-size: 1.3rem;
    font-family: ${(p) => p.theme.tertiaryfontFamily};
    color: grey;
  }

  @media (max-width: 770px) {
    border: none;
  }
`;

const getBackgroundHoverColor = (icon) => {
  let color = "grey";
  switch (icon) {
    case faFacebookF:
      color = "blue";
      break;
    case faTwitter:
      color = "lightblue";
      break;
    case faInstagram:
      color = "pink";
      break;
    case faPinterest:
      color = "red";
      break;
    case faDiscord:
      color = "green";
      break;
    case faTwitch:
      color = "purple";
      break;
    default:
      color = "grey";
  }
  return color;
};

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: grey;
  margin: 1rem;
  font-size: 2.2rem;
  cursor: pointer;
  &:hover {
    color: ${({ icon }) => getBackgroundHoverColor(icon)};
  }
`;

const DateText = styled.span`
  font-size: 1.3rem;
  font-family: ${(p) => p.theme.tertiaryfontFamily};
  color: grey;
  margin: auto;
`;
