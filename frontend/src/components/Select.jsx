/* eslint-disable react/prop-types */
const Select = ({
	label,
	value,
	name,
	options,
	defaultValue,
	onChange,
	...rest
}) => {
	return (
		<div className="mb-4">
			<label className="cursor-pointer" htmlFor={name}>
				{label}
			</label>
			<select
				{...rest}
				name={name}
				id={name}
				value={value}
				defaultValue={defaultValue}
				onChange={onChange}
				className="px-4 py-2 rounded w-full mt-1 transition-all ease-in-out bg-gray-100"
			>
				<option selected>{`Select ${name}`}</option>
				{options?.map((option, i) => (
					<option key={i} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
