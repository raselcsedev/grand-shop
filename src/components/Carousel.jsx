import { Swiper, SwiperSlide } from "swiper/react";


import { EffectCoverflow, Navigation, Pagination } from "swiper";


const Carousel = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="https://via.placeholder.com/300x400" alt="Branch 1" />
          <div className="branch-label">Branch 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/300x400" alt="Branch 2" />
          <div className="branch-label">Branch 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/300x400" alt="Branch 3" />
          <div className="branch-label">Branch 3</div>
        </SwiperSlide>
        {/* Add more slides as needed */}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon className="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
