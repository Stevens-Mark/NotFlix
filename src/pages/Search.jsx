import { useEffect, useContext } from 'react';
import { Context } from '../context/globalProvider';
import { useLocation } from 'react-router-dom';
// import items needed for data fetch
import { useFetch } from '../config/FetchData';
import { SEARCH_URL } from '../config/requests';
// import components
import MediaCard from '../components/MediaCard';
import Loader from '../components/Loader';
import LoadError from '../components/LoadError';

/**
 * Renders Search page
 * @function Search
 * @returns {JSX}
 */
const Search = () => {
	const search = useLocation().search;
	const value = new URLSearchParams(search).get('queryValue');

	const { data, isLoading, isError } = useFetch(`${SEARCH_URL}${value}`);
	const { handleDetails } = useContext(Context);
	
	useEffect(() => {
		document.title = 'NotFlix | Search';
		window.scrollTo(0, 0);

	}, []);

	return (
		<main className="media">
			<h1 className="sr-only">Welcome to NotFlix - Media Search</h1>

			{isLoading ? (
				<div className="media__status">
					<Loader />
				</div>
			) : (
				<>
					{isError ? (
						<div className="media__status">
							<LoadError />
						</div>
					) : (
						<>
							{data.length < 1 ? (
								<div className="media__status">
									<span>No results for :  "{value}"</span>
								</div>
							) : (
								<section>
									<h2>Search results for "{value}" are : </h2>
									<div className="media__grid">
										{data.map((data) => (
											<MediaCard
												key={data.id}
												media={data}
												handleDetails={handleDetails}
											/>
										))}
									</div>
								</section>
							)}
						</>
					)}
				</>
			)}
		</main>
	);
};

export default Search;

