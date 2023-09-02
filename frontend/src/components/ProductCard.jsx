/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import Tag from "./Tag";
import DefaultProduct from "../assets/images/defaultProduct.jpg";
import { motion } from "framer-motion";

const ProductCard = ({ product }) => {
	const navigate = useNavigate();

	const onClickHandler = (id) => {
		navigate(`/products/${id}`, { state: { product } });
	};

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="lg:w-1/4 md:w-1/2 p-2 w-full transition-all ease-in-out group cursor-pointer"
			onClick={() => onClickHandler(product._id)}
		>
			<div className="shadow-sm p-4 group-hover:shadow-md transition-all ease-linear">
				<a className="block relative h-48 rounded overflow-hidden">
					<img
						alt="ecommerce"
						className="object-cover object-center w-full h-full block"
						src={
							product?.image
								? `${import.meta.env.VITE_BASE_API_BASE_URL}${product?.image}`
								: DefaultProduct
						}
					/>
				</a>
				<div className="mt-2">
					<Tag label={product?.category?.name} />
					<h2 className="text-gray-900 title-font text-lg font-medium mt-2 truncate">
						{product?.name}
					</h2>
					<p className="mt-1">Min Bid Price: ৳{product?.minBidPrice}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default ProductCard;
