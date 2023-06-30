import useSWR from "swr";

export default function PageViews({ slug, children }) {
	const { data, error } = useSWR(`/api/pageViews/${slug}`, async (input) => {
		const res = await fetch(input);
		return res.json();
	});
	return (
		<div className="flex justify-start items-center">
			{data ?
				<p className="font-medium text-gray-600 dark:text-gray-300 mr-1">{data?.views?.toLocaleString()}</p> :
				<p className="font-medium text-gray-600 dark:text-gray-300 mr-1 animate-pulse">•</p>}
			{children}
		</div>
	)
}