import styled from "styled-components";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel.jsx";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories/Categories";
import ContactAbout from "../components/Contact_About/ContactAbout";
import BlogSection from "../components/Blog/BlogSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const placeholder = "Search by product name, brand, category...";
  return (
    <>
      <ImageCarousel />
      <Header />
      <Container>
        <SearchBar placeholder={placeholder} />
        <Categories />
        <ContactAbout />
        <BlogSection />
        <Footer />
      </Container>
    </>
  );
};
export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 10rem;
`;
