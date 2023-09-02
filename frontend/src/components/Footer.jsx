import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,faAddressCard,faPersonCircleQuestion,
	faCircleInfo,faLock,faCookie,faDollarSign,
	faCartShopping,faTags,faGavel,faPercent, 
	faLocationDot,faEnvelope,faPhone,faCommentDots
}from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
	return (
		<footer className="text-gray-300 body-font bg-gray-800 mt-10">
			<div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
				<div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
					<a className="flex title-font font-medium items-center md:justify-start justify-center text-blue-500">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"
							viewBox="0 0 24 24"
						>
							<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
						</svg>
						<span className="ml-3 text-xl">Zbid 2023</span>
					</a>
					<p className="mt-2 text-sm text-white">
						
					ZBid is your premier online auction system, offering a diverse marketplace for buyers and sellers alike. Our secure platform ensures a seamless and trustworthy transaction process, while our dedicated support team is here to assist you every step of the way. Join ZBid today and embark on an exciting journey of buying and selling in the world of online auctions.
					</p>
				</div>
				<div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">
							Important Links
						</h2>
						<nav className="list-none   mb-10">
							<li>
							<FontAwesomeIcon icon={faHouse}  />
								<a  className="text-gray-300 p-2 hover:text-gray-500 cursor-pointer">
									Home 
								</a>
							</li>
							<li>
							<FontAwesomeIcon icon={faAddressCard}  />
								<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
									About us	
								</a>
							</li>

							<li>
							<FontAwesomeIcon icon={faPersonCircleQuestion}  />
							
							<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
									Asked & Question
								</a>
								
								
							</li>
							<li>
							<FontAwesomeIcon icon={faCircleInfo}  />
								<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
								Help Center
								</a>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">
							Notice
						</h2>
						<nav className="list-none mb-10">
							<li>
							<FontAwesomeIcon icon={faCircleInfo}  />
								<a className="text-gray-300 p-2 hover:text-gray-500 cursor-pointer">
								Terms of Service
								</a>
							</li>
							<li>
							<FontAwesomeIcon icon={faLock}  />
								<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
								Privacy Policy
								</a>
							</li>
							<li>
							<FontAwesomeIcon icon={faCookie}  />
								<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
								Cookie Policy
								</a>
							</li>
							<li>
							<FontAwesomeIcon icon={faDollarSign}  />
								<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
									Refund Policy
								</a>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">
							What&apos;s New
						</h2>
						<nav className="list-none mb-10">
							<li>
							<FontAwesomeIcon icon={faCartShopping}  />
								<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
								New Arrivals
								</a>
							</li>
							<li>
							<FontAwesomeIcon icon={faTags}  />
								<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
								New Features 
								</a>
							</li>
							<li>
							<FontAwesomeIcon icon={faGavel}  />
								<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
									Featured Auctions
								</a>
							</li>
							<li>
							<FontAwesomeIcon icon={faPercent}  />
								<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
								Promotions and Discounts 
								</a>
							</li>
						</nav>
					</div>
					<div className="lg:w-1/4 md:w-1/2 w-full px-4">
						<h2 className="title-font font-medium text-blue-500 tracking-widest text-sm mb-3">
							More From Us Contact 
						</h2>
						<nav className="list-none mb-10">
							<li>
							<FontAwesomeIcon icon={faLocationDot}  />
								<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
									Chittagong,Bangladesh
								</a>
							</li>
							<li>
							<FontAwesomeIcon icon={faEnvelope}  />
								<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
									zbid@gmail.com
								</a>
							</li>
							<li>
							<FontAwesomeIcon icon={faPhone}  />
								<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
									+8801835662633
								</a>
							</li>
							<li>
								<FontAwesomeIcon icon={faCommentDots}  />
								<a className="text-gray-300 hover:text-gray-500 p-2 cursor-pointer">
									Zbid Official
								</a>
							</li>
						</nav>
					</div>
				</div>
			</div>
			<div className="bg-gradient-to-r from-gray-300 to-slate-300">
				<div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
					<p className="text-gray-800 text-sm text-center sm:text-left">
						© 2023 Zbid —
						<a
							href="https://twitter.com/ZbidAuction"
							rel="noopener noreferrer"
							className="text-blue-600 ml-1"
							target="_blank"
						>
 All rights reserved, made with by Zbid
						</a>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
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
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
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
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
