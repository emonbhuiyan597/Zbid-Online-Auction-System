import ErrorDisplay from "../../components/ErrorDisplay";
import SectionTitle from "../../components/SectionTitle";
import { useGetSummaryQuery } from "../../redux/apis/statisticsApi";
import TeamImage from "../../assets/images/teamwork.jpg";
import JobImage from "../../assets/images/job.jpg";
import { motion } from "framer-motion";
import Brands from "../../components/Brands";
import AnimatedNumbers from "react-animated-numbers";
import Team1 from "../../assets/images/team1.jpg";
import Team2 from "../../assets/images/team2.jpg";
import Team3 from "../../assets/images/team3.jpg";
import Team4 from "../../assets/images/team4.jpg";
import Team5 from "../../assets/images/team5.jpg";



const About = () => {
	const { data, isError, error } = useGetSummaryQuery();

	return (
		<div className="mt-4">
			<SectionTitle title={"Our Story"} />

			{isError && <ErrorDisplay error={error} />}

			<section className="mb-32 mt-12">
				<div className="flex flex-wrap">
					<div className="flex flex-wrap w-full">
						<div className="lg:w-2/5 w-full md:pr-10 md:py-6 pt-6 md:pt-0 md:pl-6 mt-4 lg:mt-0 order-last">
							<div className="flex relative pb-12">
								<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
									<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
								</div>
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
									</svg>
								</div>
								<div className="flex-grow pl-4">
									<h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
										STEP 1
									</h2>
									<p className="leading-relaxed text-slate-500 text-justify">
									Clearly articulate what you want to achieve. This will help you stay focused and motivated throughout the process.

									</p>
								</div>
							</div>
							<div className="flex relative pb-12">
								<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
									<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
								</div>
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
									</svg>
								</div>
								<div className="flex-grow pl-4">
									<h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
										STEP 2
									</h2>
									<p className="leading-relaxed text-slate-500 text-justify">
									Divide your goal into smaller, manageable tasks or milestones. 
									This will make the overall process less overwhelming and easier to tackle.
									</p>
								</div>
							</div>
							<div className="flex relative pb-12">
								<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
									<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
								</div>
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<circle cx="12" cy="5" r="3"></circle>
										<path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
									</svg>
								</div>
								<div className="flex-grow pl-4">
									<h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
										STEP 3
									</h2>
									<p className="leading-relaxed text-justify text-slate-500">
									Set deadlines for each task or milestone. This will help you stay organized and ensure that you're making steady progress towards your goal.
									</p>
								</div>
							</div>
							<div className="flex relative pb-12">
								<div className="h-full w-10 absolute inset-0 flex items-center justify-center">
									<div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
								</div>
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
								</div>
								<div className="flex-grow pl-4">
									<h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
										STEP 4
									</h2>
									<p className="leading-relaxed text-justify text-slate-500">
									Develop a strategy or plan of action for each task. Consider the best methods or techniques to use, and outline the steps you'll take to complete them.
									</p>
								</div>
							</div>
							<div className="flex relative">
								<div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-5 h-5"
										viewBox="0 0 24 24"
									>
										<path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
										<path d="M22 4L12 14.01l-3-3"></path>
									</svg>
								</div>
								<div className="flex-grow pl-4">
									<h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
										FINISH
									</h2>
									<p className="leading-relaxed text-justify text-slate-500">
									Keep your motivation high by celebrating small victories and reminding yourself of the ultimate goal. 
									</p>
								</div>
							</div>
						</div>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
							className="lg:w-3/5 w-full"
						>
							<img
								className="w-full object-cover object-center rounded-lg md:mt-0 mt-12"
								src={TeamImage}
								alt="step"
							/>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="">
				<div className="flex flex-wrap">
					<div className="-mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
						<div className="w-full sm:p-4 px-4 mb-6">
							<h1 className="title-font font-medium text-3xl mb-2  text-gray-900">
							Why Choose Zbid!
							</h1>
							<div className="leading-relaxed text-slate-500 text-justify">
							Zbid is a great choice for an online auction system because it provides a user-friendly interface that makes it easy to create and manage your own auctions. With Zbid, you can set up auctions for a variety of items.
							</div>
							<div className="leading-relaxed mt-2 text-slate-500 text-justify">
							Zbid provides a variety of tools to help you promote your auction, including email notifications, social media integration, and more. Zbid also offers a variety of options for setting up your auction, including starting price, reserve price, buy-it-now price, and more. Zbid is designed to help you get the most out of your online auctions. 
							</div>
						</div>
						<div className="grid grid-cols-3 gap-4">
							<div className="text-center shadow p-4">
								<h2 className="flex justify-center title-font font-medium text-3xl text-gray-900">
									<AnimatedNumbers animateToNumber={data?.users} />
								</h2>
								<p className="leading-relaxed">Users</p>
							</div>
							<div className="text-center shadow p-4">
								<div className="flex justify-center title-font font-medium text-3xl text-gray-900 text-center">
									<AnimatedNumbers animateToNumber={data?.categories} />
								</div>
								<p className="leading-relaxed">Categories</p>
							</div>
							<div className="text-center shadow p-4">
								<h2 className="flex justify-center title-font font-medium text-3xl text-gray-900">
									<AnimatedNumbers animateToNumber={data?.products} />
								</h2>
								<p className="leading-relaxed">Products</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							<img
								className="object-cover object-center w-full h-full"
								src={JobImage}
								alt="stats"
							/>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="mt-24">	
					<SectionTitle title={"Meet Our Team"} />
				<div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
					<div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] rounded shadow-md hover:shadow-lg transition group overflow-hidden">
						<div className="bg-white">
							<div className="overflow-hidden">
								<img
									src={Team1}
									alt="member one"
									className="scale-100 group-hover:scale-105 transition "
								/>
							</div>
							<div className="pt-4 text-center bg-white pb-4">
								<h4 className="text-xl font-semibold">Robert Hughes</h4>
								<h6 className="text-gray-700 py-2">Software Engineer</h6>
								<div className="flex gap-2 justify-center items-center">
									<a className="text-blue-600">
										<svg
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<rect
												width="20"
												height="20"
												x="2"
												y="2"
												rx="5"
												ry="5"
											></rect>
											<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="currentColor"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="0"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path
												stroke="none"
												d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
											></path>
											<circle cx="4" cy="4" r="2" stroke="none"></circle>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] rounded shadow-md hover:shadow-lg transition group overflow-hidden">
						<div className="bg-white">
							<div className="overflow-hidden">
								<img
									src={Team2}
									alt="member two"
									className="scale-100 group-hover:scale-105 transition "
								/>
							</div>
							<div className="pt-4 text-center bg-white pb-4">
								<h4 className="text-xl font-semibold">Alex Thompson</h4>
								<h6 className="text-gray-700 py-2">UX/UI Designer</h6>
								<div className="flex gap-2 justify-center items-center">
									<a className="text-blue-600">
										<svg
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<rect
												width="20"
												height="20"
												x="2"
												y="2"
												rx="5"
												ry="5"
											></rect>
											<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="currentColor"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="0"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path
												stroke="none"
												d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
											></path>
											<circle cx="4" cy="4" r="2" stroke="none"></circle>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] rounded shadow-md hover:shadow-lg transition group overflow-hidden">
						<div className="bg-white">
							<div className="overflow-hidden">
								<img
									src={Team3}
									alt="member three"
									className="scale-100 group-hover:scale-105 transition "
								/>
							</div>
							<div className="pt-4 text-center bg-white pb-4">
								<h4 className="text-xl font-semibold">David Reynolds</h4>
								<h6 className="text-gray-700 py-2">Product Designer </h6>
								<div className="flex gap-2 justify-center items-center">
									<a className="text-blue-600">
										<svg
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<rect
												width="20"
												height="20"
												x="2"
												y="2"
												rx="5"
												ry="5"
											></rect>
											<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="currentColor"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="0"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path
												stroke="none"
												d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
											></path>
											<circle cx="4" cy="4" r="2" stroke="none"></circle>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] rounded shadow-md hover:shadow-lg transition group overflow-hidden">
						<div className="bg-white">
							<div className="overflow-hidden">
								<img
									src={Team4}
									alt="member four"
									className="scale-100 group-hover:scale-105 transition "
								/>
							</div>
							<div className="pt-4 text-center bg-white pb-4">
								<h4 className="text-xl font-semibold">James Foster</h4>
								<h6 className="text-gray-700 py-2">Financial Analyst</h6>
								<div className="flex gap-2 justify-center items-center">
									<a className="text-blue-600">
										<svg
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<rect
												width="20"
												height="20"
												x="2"
												y="2"
												rx="5"
												ry="5"
											></rect>
											<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="currentColor"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="0"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path
												stroke="none"
												d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
											></path>
											<circle cx="4" cy="4" r="2" stroke="none"></circle>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-[2px] rounded shadow-md hover:shadow-lg transition group overflow-hidden">
						<div className="bg-white">
							<div className="overflow-hidden">
								<img
									src={Team5}
									alt="member five"
									className="scale-100 group-hover:scale-105 transition "
								/>
							</div>
							<div className="pt-4 text-center bg-white pb-4">
								<h4 className="text-xl font-semibold">Michael Johnson</h4>
								<h6 className="text-gray-700 py-2">Marketing Specialist</h6>
								<div className="flex gap-2 justify-center items-center">
									<a className="text-blue-600">
										<svg
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<rect
												width="20"
												height="20"
												x="2"
												y="2"
												rx="5"
												ry="5"
											></rect>
											<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
										</svg>
									</a>
									<a className="ml-3 text-blue-600">
										<svg
											fill="currentColor"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="0"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path
												stroke="none"
												d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
											></path>
											<circle cx="4" cy="4" r="2" stroke="none"></circle>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="mt-32">
			<SectionTitle title={"Our Brand Partners"} />
				<Brands />
			</section>
		</div>
	);
};

export default About;
