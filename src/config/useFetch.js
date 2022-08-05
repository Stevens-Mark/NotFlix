import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Service to fetch data
 * @function useFetch (custom Hook)
 * @param {string} fetchUrl: URL to fetch data from...
 * @returns {object} data: movies /tv shows information
 * @returns {boolean} isLoading:
 * @returns {boolean} isError:
 */
export function useFetch(fetchUrl) {
	const [data, setData] = useState({});
	const [isLoading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	// real api url/endpoints
	const url = `https://api.themoviedb.org/3${fetchUrl}`;

	// mocked data urls
	// const url =  `../mockData/MockedDataCopy.json`	// used for mocking data

	useEffect(() => {
		if (!url) return;
		let cancel = false;

		async function fetchData() {
			setLoading(true);
			try {
				const response = await fetch(url);
				const data = await response.json();
				const media_type = ['person']; // filter out people from results
				const filtered = data.results.filter(
					(i) => !media_type.includes(i.media_type)
				);
				if (cancel) return;
				setData(filtered);
			} catch (err) {
				console.log(err);
				if (cancel) return;
				setIsError(true);
			} finally {
				if (cancel) return;
				setLoading(false);
			}
		}
		fetchData();
		return () => {
			cancel = true;
		};
	}, [url]);
	return { isLoading, data, isError };
}

// Prototypes

useFetch.propTypes = {
	fetchUrl: PropTypes.string.isRequired,
};

