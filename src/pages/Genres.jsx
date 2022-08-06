import { useEffect, useContext, useState } from 'react';
import { Context } from '../context/globalProvider';
import { useLocation } from 'react-router-dom';
// import components
import MediaCard from '../components/MediaCard';
import Loader from '../components/Loader';
import LoadError from '../components/LoadError';

/**
 * Renders Search page with search reults
 * @function Search
 * @returns {JSX}
 */
const Genres = () => {

	const [page, setPage] = useState(1);
	const { handleDetails, showMore, isLoading, isError, showData, totalPages } =	useContext(Context);
	const media = useLocation().dataProps;

	useEffect(() => {
		document.title = 'NotFlix | More';
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="media">
			<h1 className="sr-only">
				{media?.title
					? `${media.title}: Additional Movies And/Or TV Shows`
					: 'There was a problem retrieving the items'}
			</h1>

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
							<section className="media__section">
								{media?.title ? (
									<h2>{media.title}</h2>
								) : (
									<div className="media__status">
										<LoadError />
									</div>
								)}
								<div className="media__grid">
									{showData.map((data, idx) => (
										<MediaCard
											key={`${data.id}--${idx}`}
											media={data}
											handleDetails={handleDetails}
										/>
									))}
								</div>
								<div className="media__pageNumber">
									{page === 1 ? '1' : `Pages 1-${page}`} of {totalPages}{' '}
									{totalPages === 1 ? 'Page' : 'Pages'}
								</div>
								{page !== totalPages && (
									<>
										{media?.url && (
											<span className="media__button">
												<button
													className="button button--playModal"
													onClick={() => {
														setPage(page + 1);
														showMore(`${media.url}&page=${page}`);
													}}
												>
													More ...
												</button>
											</span>
										)}
									</>
								)}
							</section>
						</>
					)}
				</>
			)}
		</main>
	);
};

export default Genres;

