import styled from "styled-components";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel.jsx";
import Header from "../components/Header";
import Container from "../components/base/Container";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories/Categories";
import ContactAbout from "../components/ContactAbout";
import BlogSection from "../components/Blog/BlogSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <ImageCarousel />
      <Header />
      <Container>
        <SearchBar />
        <Categories />
        <ContactAbout />
        <BlogSection />
        <Footer />
      </Container>
    </>
  );
};
export default Home;
