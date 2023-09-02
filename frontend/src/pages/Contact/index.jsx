import { useEffect, useState } from "react";
import { useAddContactMutation } from "../../redux/apis/contactApi";
import ErrorDisplay from "../../components/ErrorDisplay";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";

const initialState = {
	name: "",
	email: "",
	message: "",
	
};

const Contact = () => {
	const [contactData, setContactData] = useState(initialState);

	const [addContact, { isLoading, isError, error, isSuccess }] =
		useAddContactMutation();

	const handleChange = (e) => {
		setContactData({ ...contactData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addContact({ data: contactData });
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success("Thank you for your query. We'll get back to you soon.");
			setContactData(initialState);
		}
	}, [isSuccess]);

	return (
		
		<section className="text-gray-600 body-font mt-4  relative">
			
					<SectionTitle title={"Our Location"} />
				
			<div className="container mt-10  p-23 mx-auto flex sm:flex-nowrap flex-wrap gap-y-2 items-center">
			
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-center relative"
				>
					<div className="w-full">
						<iframe
							width="100%"
							height="450"
							src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Chittagong+(Zbid)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						></iframe>
						<div className="bg-gray-100 relative flex flex-wrap py-6 rounded shadow-md">
							<div className=""></div>
							<div className="lg:w-1/2 px-6">
								<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
									ADDRESS
								</h2>
								<p className="mt-1 text-blue-500">
									GEC Cirlce,15 Sheikh Mujib Road, Chittagong, Bangladesh
								</p>
							</div>
							<div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
								<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
									EMAIL
								</h2>
								<a className="text-blue-500 leading-relaxed">
									www.zbid@mail.com
								</a>
								<h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
									PHONE
								</h2>
								<p className="leading-relaxed text-blue-500">+8801835662633</p>
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="lg:w-1/3 md:w-1/2 px-4 shadow rounded"
				>
					<form
						onSubmit={handleSubmit}
						className="bg-white flex flex-col md:ml-auto w-full md:py-8 mt-4 md:mt-0 "
					>
						<h2 className="text-gray-900 text-lg mb-4 font-dark font-medium title-font">
							Feedback
						</h2>
						<p className="leading-relaxed mb-4 text-dark-600 ">
							Here You Can Share Your Important Topics With Us.	
						</p>

						{isError && <ErrorDisplay error={error} />}

						<div className="relative mb-4">
							<label htmlFor="name" className="leading-7 text-sm text-gray-600">
								Name
							</label>
							<input
								required
								type="text"
								id="name"
								name="name"
								value={contactData?.name}
								onChange={handleChange}
								className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<div className="relative mb-4">
							<label
								htmlFor="email"
								className="leading-7 text-sm text-gray-600"
							>
								Email
							</label>
							<input
								required
								type="email"
								id="email"
								name="email"
								value={contactData?.email}
								onChange={handleChange}
								className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>

						

						<div className="relative mb-4">
							<label
								htmlFor="message"
								className="leading-7 text-sm text-gray-600"
							>
								Message
							</label>
							<textarea
								required
								id="message"
								name="message"
								value={contactData?.message}
								onChange={handleChange}
								className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							></textarea>
						</div>
						<button
							disabled={isLoading}
							type="submit"
							className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
						>
							Submit
						</button>
						<p className="text-XL text-dark-500 text-center font-low mt-4">
							Thanks for submitting Your Valuable Feedback
						</p>
					</form>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
