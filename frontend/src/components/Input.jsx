/* eslint-disable react/prop-types */
const Input = ({
	label,
	type = "text",
	name,
	value,
	onChange,
	required,
	placeholder,
	...rest
}) => {
	return (
		<div className="">
			{label && (
				<label className="cursor-pointer" htmlFor={name}>
					{label}
				</label>
			)}
			<input
				{...rest}
				type={type}
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				required={required}
				placeholder={placeholder}
				className="px-4 py-2 rounded w-full transition-all ease-in-out bg-gray-100"
			/>
		</div>
	);
};

export default Input;
