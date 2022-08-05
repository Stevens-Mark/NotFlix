import { useEffect, useContext } from 'react';
import { Context } from '../context/globalProvider';
import { useLocation } from 'react-router-dom';
import { SEARCH_URL } from '../config/requests';
// import components
import MediaCard from '../components/MediaCard';
import Loader from '../components/Loader';
import LoadError from '../components/LoadError';

/**
 * Renders Search page with search reults
 * @function Search
 * @returns {JSX}
 */
const Search = () => {

	// // get search "queryValue" string from Url
	const search = useLocation().search;
	const value = new URLSearchParams(search).get('queryValue');

	const { handleDetails, fetchData, isLoading, isError, data, totalPages, page, setPage } =
		useContext(Context);

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
									<span>There are no media items ...</span>
								</div>
							) : (
								<section className="media__section">
									<h2>
										Search results for "{value}" are :{' '}
									</h2>
									<div className="media__grid">
										{data.map((data, idx) => (
											<MediaCard
												key={`${data.id}--${idx}`}
												media={data}
												handleDetails={handleDetails}
											/>
										))}
									</div>
									{page !== totalPages && (
										<span className="media__button">
											<button
												className="button button--playModal"
												onClick={() => {
													setPage(page + 1);
													fetchData(`${SEARCH_URL}${value}&page=${page}`);
												}}
											>
												More ...
											</button>
										</span>
									)}
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

