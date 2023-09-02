import ProductCard from "../../components/ProductCard";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SectionTitle from "../../components/SectionTitle";
import { useGetProductsQuery } from "../../redux/apis/productApi";
import Loader from "../../components/Loader";
import ErrorDisplay from "../../components/ErrorDisplay";
import { Swiper, SwiperSlide } from "swiper/react";



import Auction  from "../../assets/images/Auction.jpg";

import { Autoplay, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import {
	faHeadset,
	faBagShopping,
	faGavel,faTruck,faMoneyBillWave,faUserShield
} from "@fortawesome/free-solid-svg-icons";
import Brands from "../../components/Brands";
import { useSelector } from "react-redux";

const Homepage = () => {
	const navigate = useNavigate();

	const { access } = useSelector((state) => state.auth);

	const {
		data: liveProducts,
		isLoading: isLiveLoading,
		isError: isLivError,
		error: liveError,
	} = useGetProductsQuery({ auctionStatus: "live", limit: 20 });

	const {
		data: upcommingProducts,
		isLoading: isUpcommingLoading,
		isError: isUpcommingError,
		error: upcommingError,
	} = useGetProductsQuery({ auctionStatus: "upcomming", limit: 20 });

	return (
		<>
			<section>
				<div className="flex py-10 md:flex-row flex-col items-center">
					<div className="w-full md:w-6/12 mb-10 md:mb-0">
						<Swiper
							autoplay={{
								delay: 2000,
								disableOnInteraction: false,
							}}
							pagination={{
								clickable: true,
							}}
							modules={[Autoplay, Pagination]}
							spaceBetween={50}
							slidesPerView={1}
						>
							<SwiperSlide>
								<img
									className="object-cover object-center  rounded"
									alt="Auction"
									src={Auction}
								/>
								
							</SwiperSlide>

							<SwiperSlide>
								<img
									className="object-cover object-center  rounded"
									alt="Auction"
									src={Auction}
								/>
							</SwiperSlide>
							{/* <SwiperSlide>
								<img
									className="object-cover object-center  rounded"
									alt="Auctionfour"
									src={Auctionfour}
								/>
							</SwiperSlide> */}
							{/* <SwiperSlide>
								<img
									className="object-cover object-center  rounded"
									alt="Auction"
									src={Auction}
								/>
								
							</SwiperSlide> */}
							<SwiperSlide>
								<img
									className="object-cover object-center  rounded"
									alt="Auction"
									src={Auction}
								/>
								
							</SwiperSlide>
							
							
						</Swiper>
					</div>
					<motion.div
						initial={{ opacity: 0, y: -100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="lg:flex-grow w-full md:w-6/12 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
					>
						<h1 className="title-font sm:text-5xl text-4xl mb-4 font-medium text-gray-900">
						Bid and Win at ZBID!
						</h1>

						<h4 className="text-justify  text-3xl mb-4 text-violet-500 to-blue-500">Bid, Win, Save, Repeat
						
						</h4>
						<p className="mb-8 leading-relaxed text-slate-500  text-justify">
						the ultimate online auction system! Experience the thrill of bidding and winning on a wide range of items all from the comfort of your own home. Our user-friendly platform ensures a seamless and secure auction experience, with real-time bidding, detailed item descriptions, and transparent seller ratings. Whether you&apos;re a seasoned bidder or new to the world of online auctions, ZBid offers a dynamic marketplace where you can discover unique treasures and snag incredible deals. Join us today and let the bidding begin!
					
						
						</p>
						
						{!access &&
							<button  onClick={() => navigate("/login")}
							className="flex-shrink-0 text-white bg-gradient-to-r from-violet-500 to-blue-500 hover:from-purple-500 hover:to-violet-500 border-0 py-2 px-8 focus:outline-none rounded-full text-lg mt-10 sm:mt-0"> Join Now
							
							</button>
						}

						
					</motion.div>
					
				</div>
			</section>

			<section className="">
				<div className="grid  grid-cols-1 md:grid-cols-3 mt-6 gap-3">
					<div className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white text-center transition">
						<FontAwesomeIcon icon={faHeadset} size="4x" />
						<h4 className="text-2xl text-center mt-4">24/7 Support Team</h4>
						<p className="mt-4">
							Get instant reply with support team. Don&apos;t Worry!
						</p>
					</div>
					<div className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white text-center transition">
						<FontAwesomeIcon icon={faTruck} size="4x" />
						<h4 className="text-2xl text-center mt-4">Fastest Delivery</h4>
						<p className="mt-4">
							Get Fastest Delivery All Time.
						</p>
					</div>
					<div className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white text-center transition">
						<FontAwesomeIcon icon={faBagShopping} size="4x" />
						<h4 className="text-2xl text-center mt-4">Instant Buying</h4>
						<p className="mt-4">
							Easily Buy Your Product Instantly Without Facing Any Problem.
						</p>
					</div>
					<div className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white text-center transition">
						<FontAwesomeIcon icon={faGavel} size="4x" />
						<h4 className="text-2xl text-center mt-4">Instant Auction</h4>
						<p className="mt-4">
							Easily Join The Auction Place And Bid.
						</p>
					</div>

					<div className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white text-center transition">
						<FontAwesomeIcon icon={faMoneyBillWave} size="4x" />
						<h4 className="text-2xl text-center mt-4">Easy Payment</h4>
						<p className="mt-4">
							Easily Pay Your Payment Without Any Hassle.
						</p>
					</div>


					
					<div className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-400 hover:to-blue-500 rounded p-4 text-white text-center transition">
						<FontAwesomeIcon icon={faUserShield} size="4x" />
						<h4 className="text-2xl text-center mt-4">Trusted and Safer</h4>
						<p className="mt-4">
							Secure And Trusted Website Of Alltime.
						</p>
					</div>

				


				</div>
			</section>

			<section className="mt-24   ">
				<SectionTitle title={"Live Auctions"} />
				<div className="flex flex-wrap  ">
					{isLiveLoading ? (
						<Loader />
					) : isLivError ? (
						<ErrorDisplay error={liveError} />
					) : liveProducts.length > 0 ? (
						liveProducts.map((product) => (
							<ProductCard key={product._id} product={product} />
						))
					) : (
						<ErrorDisplay error={"No Product Found"} />
					)}
				</div>
			</section>

			<div className="mt-24 ">
				<Swiper
					autoplay={{
						delay: 1500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
				>
					<SwiperSlide>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="py-10 bg-gradient-to-r from-sky-500 to-indigo-500 rounded shadow-sm"
						>
							<div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
								<h1 className="flex-grow sm:pr-16 text-3xl font-medium title-font text-white">
									Don&apos;t miss out on these amazing deals!
								</h1>
								<button
									onClick={() => navigate("/products")}
									className="flex-shrink-0 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-purple-500 hover:to-pink-500 border-0 py-2 px-8 focus:outline-none rounded text-lg mt-10 sm:mt-0"
								>
									Start Bidding
								</button>
							</div>
						</motion.div>
					</SwiperSlide>
					<SwiperSlide>
						<motion.div
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
							className="py-10 bg-gradient-to-r from-sky-500 to-indigo-500 rounded shadow-sm"
						>
							<div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
								<h1 className="flex-grow sm:pr-16 text-3xl font-medium title-font text-white">
									Email us : admin@zbid.com
								</h1>
								<button
									onClick={() => (window.location = "mailto:info@zbid.com")}
									className="flex-shrink-0 text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-purple-500 hover:to-pink-500 border-0 py-2 px-8 focus:outline-none rounded text-lg mt-10 sm:mt-0"
								>
									Email
								</button>
							</div>
						</motion.div>
					</SwiperSlide>
				</Swiper>
			</div>

			<section className="mt-24">
				<SectionTitle title={"Upcoming Auctions"} />
				<div className="flex flex-wrap">
					{isUpcommingLoading ? (
						<Loader />
					) : isUpcommingError ? (
						<ErrorDisplay error={upcommingError} />
					) : upcommingProducts.length > 0 ? (
						upcommingProducts.map((product) => (
							<ProductCard key={product._id} product={product} />
						))
					) : (
						<ErrorDisplay error={"No Product Found"} />
					)}
				</div>
			</section>

			<section className="mt-24">
				<SectionTitle title={"Our Brands Partners"} />
				<Brands />
			</section>
		</>
	);
};

export default Homepage;
