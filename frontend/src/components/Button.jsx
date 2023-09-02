/* eslint-disable react/prop-types */
const Button = ({ children, fullWidth, ...props }) => {
	return (
		<button
			{...props}
			className={`px-4 py-2 rounded bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-sky-500 hover:to-indigo-500 flex items-center justify-center gap-x-1 text-white font-semibold transition ease-in-out ${
				fullWidth && "w-full"
			}`}
		>
			{children}
		</button>
	);
};

export default Button;

export const SecondaryButton = ({ children, ...props }) => {
	return (
		<button
			{...props}
			className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 flex items-center gap-x-1 text-gray-600 font-semibold transition ease-in-out"
		>
			{children}
		</button>
	);
};
