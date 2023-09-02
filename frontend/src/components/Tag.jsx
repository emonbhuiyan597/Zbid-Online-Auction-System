/* eslint-disable react/prop-types */
const Tag = ({ label }) => {
	return (
		<span className="bg-blue-100 text-blue-500 rounded px-2 py-1 font-semibold text-sm">
			{label}
		</span>
	);
};

export default Tag;
