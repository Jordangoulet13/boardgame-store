import styled from "styled-components";
import CategoryItem from "./Categories/CategoryItem";
import Button from "./base/Button";
import map from "../assets/map.jpg";
import storeImg from "../assets/store2.jpg";
import events from "../assets/Categories/events.jpg";
import giftCards from "../assets/Categories/giftcards.png";
import shipping from "../assets/Categories/shipping.png";

const ContactAbout = (props) => {
  const handleWidgetClick = () => {
    alert("More Options Coming Soon :) ");
  };
  return (
    <>
      <Container>
        <img src={map} alt="" />
        <Info>
          <h1>Vancouver and New West's friendly local game store</h1>
          <p>
            Our two stores in downtown Vancouver and New Westminster, BC are
            filled to the brim with board games, card games, jigsaw puzzles, and
            more.
          </p>
          <p>
            Still can't find what you're looking for? Drop us a line and we'll
            try to track it down for you!
          </p>

          <StyledButton secondary onClick={() => handleWidgetClick()}>
            CONTACT US
          </StyledButton>
        </Info>
        <Info>
          <h1>Inspiring joy through human connection</h1>
          <p>
            In sharing our love of games with the Lower Mainland and the rest of
            Canada, we want to spark empathy, creativity, and fun in our
            communities. After all, games are how we learn, grow, and spend time
            with the people we love.
          </p>
          <p>
            From recommending titles for game night at home to hosting in-store
            (now online!) events, we want to help you build your gaming
            community.
          </p>

          <StyledButton secondary onClick={() => handleWidgetClick()}>
            ABOUT US
          </StyledButton>
        </Info>
        <img src={storeImg} alt="" />
      </Container>
      <CategoriesContainer>
        <CategoryItem image={events} />
        <CategoryItem image={giftCards} />
        <CategoryItem image={shipping} />
      </CategoriesContainer>
    </>
  );
};

export default ContactAbout;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 35rem 35rem;
  grid-gap: 3rem;
  margin-bottom: 5rem;
  @media (max-width: 950px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: repeat(4, 50rem);
  }

  img {
    display: block;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  overflow: hidden;
  width: 100%;
  height: 100%;

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }
  p {
    font-size: 1.7rem;
    font-family: ${(p) => p.theme.tertiaryfontFamily};
    @media (max-width: 770px) {
      font-size: 2.4rem;
    }
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 22rem;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 20rem;
  grid-gap: 3rem;
  margin: 5rem 0;
  @media (max-width: 950px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: none;
    grid-gap: 0;
  }
`;
