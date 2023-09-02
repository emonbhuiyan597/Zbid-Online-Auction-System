/* eslint-disable react/prop-types */

const SectionTitle = ({ title }) => {
	return (
		<div className="mb-4">
			<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
				{title}
			</h1>
			<div className="h-1.5 w-20 bg-blue-500 rounded "></div>
		</div>
	);
};

export default SectionTitle;
