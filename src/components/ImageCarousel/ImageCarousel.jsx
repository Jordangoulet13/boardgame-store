import { Swiper, SwiperSlide } from "swiper/react";

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
          delay: 5000,
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
          <img src={vancouver} alt="" />
          <div className="slideContainer">
            <h1>Vancouver and New West stores are open!</h1>
            <div className="slideButton">{"LET'S GO >>"}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={shippingLocally} alt="" />
          <div className="slideContainer">
            <h1>Now Shipping Across Canada</h1>
            <div className="slideButton">{"OR PICK UP IN-STORE >>"}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={locallySourced} alt="" />
          <div className="slideContainer">
            <h1>Locally sourced, artisanal family fun</h1>
            <div className="slideButton">{"MADE IN VANCOUVER >>"}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={earnPoints} alt="" />
          <div className="slideContainer">
            <h1>Earn points, get goodies</h1>
            <div className="slideButton">{"GOODIES ARE THE BEST >>"}</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ImageCarousel;
