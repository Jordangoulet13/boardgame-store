import { Swiper, SwiperSlide } from "swiper/react";
import styled, { css } from "styled-components";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import "swiper/components/navigation/navigation.min.css";
// import "swiper/components/pagination/pagination.min.css";
import "./imageCarousel.styles.css";

import vancouver from "../../assets/vancouver-and-new-west-stores-are-open.jpg";
import earnPoints from "../../assets/earn-points-get-goodies.jpg";
import shippingLocally from "../../assets/now-shipping-across-canada.jpg";
import locallySourced from "../../assets/locally-sourced-artisanal-family-fun.jpg";

import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
]);

const ImageCarousel = (props) => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={vancouver} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shippingLocally} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={locallySourced} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={earnPoints} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageCarousel;
