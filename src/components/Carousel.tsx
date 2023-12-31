import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// Direct React component imports

const Carousel = () => {
  return (
    <div className="w- mx-4 rounded-lg ">
      <Swiper
        autoplay={{
          delay: 2000,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        scrollbar={{
          enabled: false,
          draggable: false,
        }}
      >
        <SwiperSlide>
          <div className="h-[100px] sm:h-[200px] md:h-[300px] lg:h-[500px] rounded-lg  flex">
            <img
              className="transform rounded-lg transition-all ease-in-out object-cover w-full"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-tjmqXN7PvSA%2FYNBUBC4a_rI%2FAAAAAAAAE5U%2FHzjRrCB8rZwM-J2PVqh-84WrdO_33WvTwCNcBGAsYHQ%2Fs1920%2FLaptop_banner.jpg&f=1&nofb=1&ipt=0ebde934de6539dafe0822523e174d2270f0735dc4681e28d71f841f25d78ae4&ipo=images"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[100px] sm:h-[200px] md:h-[300px] lg:h-[500px]  flex">
            <img
              className="transform rounded-lg transition-all ease-in-out object-cover w-full"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fca%2Fe7%2F2c%2Fcae72ce86998abcadd5051acd91a696b.jpg&f=1&nofb=1&ipt=e0046cb134f2693f366e6ea353fbb141698da0a4892ba8364966fadcd47bb6cc&ipo=images"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[100px] sm:h-[200px] md:h-[300px] lg:h-[500px]  flex">
            <img
              className="transform rounded-lg transition-all ease-in-out object-cover w-full"
              src="https://image.freepik.com/free-vector/modern-black-friday-sale-website-banner_1361-2905.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
