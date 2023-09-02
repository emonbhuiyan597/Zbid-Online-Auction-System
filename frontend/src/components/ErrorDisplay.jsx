/* eslint-disable react/prop-types */

const ErrorDisplay = ({ error }) => {
	return (
		<div className="w-full px-4 py-2 rounded bg-red-100 text-red-500 font-semibold my-4 text-center">
			{error?.message
				? error.message
				: error?.data?.message
				? error?.data?.message
				: JSON.stringify(error)}
		</div>
	);
};

export default ErrorDisplay;
