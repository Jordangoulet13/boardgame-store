import styled from "styled-components";
import BlogItem from "./BlogItem";
import Button from "../base/Button";

import teachingImage from "../../assets/teaching.jpg";
import partyImage from "../../assets/party.jpg";
import onionImage from "../../assets/onion.jpg";

const Content = {
  teaching: {
    title: "Teaching through gaming: Top homeschool games for all ages",
    text: "Gameschooling is great for learning math, storytelling, geography, science, pattern recognition, spatial planning, and thinking ahead - not to mention cooperati...",
  },
  party: {
    title:
      "Party on! Family-friendly party games to put together your get-together",
    text: "Games are a fantastic way to add some personality and excitement to any party. These family-friendly party games will help your group expand your gaming horizon...",
  },
  social: {
    title:
      "Social deduction party games for 2021 that'll make you question your friends’ loyalty",
    text: "Social deduction games are ones with a hidden betrayer or bad guy. Everyone *seems* nice enough, but may have secret motives that place them at odds with the re...",
  },
};

const BlogSection = () => {
  const { teaching, party, social } = Content;
  return (
    <Container>
      <ContainerGrid>
        <BlogItem
          image={teachingImage}
          title={teaching.title}
          text={teaching.text}
        />
        <BlogItem image={partyImage} title={party.title} text={party.text} />
        <BlogItem image={onionImage} title={social.title} text={social.text} />
      </ContainerGrid>
      <Button categories>VISIT THE BLOG</Button>
    </Container>
  );
};

export default BlogSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
`;

const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 48rem;
  grid-gap: 3rem;
  margin-bottom: 5rem;
`;
