import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

const Carousel = () => {
  return (
    <div className="w-full rounded-lg ">
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        scrollbar={{
          enabled: false,
          draggable: false,
        }}
      >
        <SwiperSlide>
          <div className="max-h-[450px] rounded-lg  flex">
            <img
              className="transform rounded-lg transition-all ease-in-out object-cover w-full"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-tjmqXN7PvSA%2FYNBUBC4a_rI%2FAAAAAAAAE5U%2FHzjRrCB8rZwM-J2PVqh-84WrdO_33WvTwCNcBGAsYHQ%2Fs1920%2FLaptop_banner.jpg&f=1&nofb=1&ipt=0ebde934de6539dafe0822523e174d2270f0735dc4681e28d71f841f25d78ae4&ipo=images"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="max-h-[450px]  flex">
            <img
              className="transform rounded-lg transition-all ease-in-out object-cover w-full"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fca%2Fe7%2F2c%2Fcae72ce86998abcadd5051acd91a696b.jpg&f=1&nofb=1&ipt=e0046cb134f2693f366e6ea353fbb141698da0a4892ba8364966fadcd47bb6cc&ipo=images"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
