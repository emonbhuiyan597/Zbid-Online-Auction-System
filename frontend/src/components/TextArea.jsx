/* eslint-disable react/prop-types */
const TextArea = ({
	label,
	name,
	value,
	onChange,
	required,
	placeholder,
	cols = "30",
	rows = "5",
	...rest
}) => {
	return (
		<div className="mb-4">
			<label className="cursor-pointer" htmlFor={name}>
				{label}
			</label>

			<textarea
				{...rest}
				required={required}
				placeholder={placeholder}
				name={name}
				id={name}
				cols={cols}
				rows={rows}
				value={value}
				onChange={onChange}
				className="px-4 py-2 rounded w-full mt-1 transition-all ease-in-out bg-gray-100"
			></textarea>
		</div>
	);
};

export default TextArea;
