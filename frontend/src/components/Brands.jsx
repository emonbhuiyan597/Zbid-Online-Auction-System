import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Kellog from "../assets/images/kellogg_s.png";
import Santander from "../assets/images/santander.png";
import Danone from "../assets/images/danone.png";
import Chanel from "../assets/images/chanel.png";
import Cat from "../assets/images/cat.png";
import Allianz from "../assets/images/Allianz.png";
import ship from "../assets/images/ship.png";
import mak from "../assets/images/mak.jpg";
export default function Brands() {
	return (
		<div className="">
			<Swiper
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
				}}
				modules={[Autoplay, Pagination]}
				spaceBetween={100}
				slidesPerView={5}
			>
				<SwiperSlide>
					<img src={Kellog} alt="brand" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Santander} alt="brand" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={mak} alt="brand" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Allianz} alt="brand" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Danone} alt="brand" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Chanel} alt="brand" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={Cat} alt="brand" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={ship} alt="brand" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
