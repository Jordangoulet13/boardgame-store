import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import db from "../firebase/firebase.utils";
import { setItems } from "../redux/features/itemSlice";

import ImageCarousel from "../components/ImageCarousel/ImageCarousel.jsx";
import Header from "../components/Header";
import Container from "../components/base/Container";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories/Categories";
import ContactAbout from "../components/ContactAbout";
import BlogSection from "../components/Blog/BlogSection";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  let items = [];

  useEffect(() => {
    db.collection("Inventory").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        return (items = [...items, { id: doc.id, ...doc.data() }]);
      });

      dispatch(
        setItems({
          collections: items,
        })
      );
    });
  }, []);
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
