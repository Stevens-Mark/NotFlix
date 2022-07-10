import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalProvider';
import PropTypes from 'prop-types';
// import items needed for data fetch
import { useFetch } from '../config/FetchData';
import { IMAGE_URL } from '../config/requests';
import { randomSelect } from '../utils/functions';
// import components
import Loader from './Loader';
import LoadError from './LoadError';
// import images/icons
import noImage from '../assets/images/NoImageAvailableBanner.webp';
import infoIcon from '../assets/icons/alert-circle-outline.svg';
import playIcon from '../assets/icons/play.svg';

/**
 * Renders the Banner
 * @function Banner
 * @param {string} fetchUrl: path to data source
 * @returns {JSX} banner with image randomly selected
 */
const Banner = ({ fetchUrl }) => {
	const { showMovieDetails } = useContext(GlobalContext);
	const { data, isLoading, isError } = useFetch(fetchUrl);

	const handleDetails = (movie) => {
		showMovieDetails(movie);	// show movie details in modal
	};

	const handlePlay = (movie) => {
		console.log(movie);
	};

	if (isLoading) {
		return (
			<article className="hero__status">
				<Loader />
			</article>
		);
	} else if (isError) {
		return (
			<article className="hero__status">
				<LoadError />
			</article>
		);
	} else {
		const movie = randomSelect(data.results);

		return (
			<article className="hero">
				<img
					className="hero__image"
					src={
						movie.backdrop_path ? `${IMAGE_URL}${movie.backdrop_path}` : noImage
					}
					alt={movie?.title || movie?.name || movie?.original_title}
				/>
				<span className="hero__mask" />
				<span className="hero__shadow" />
				<div className="hero__info">
					<h2 className="hero__title">
						{movie?.title || movie?.name || movie?.original_title}
					</h2>
					<span className="buttons">
						<button
							className="button button--play"
							onClick={() => handlePlay(movie)}
						>
							<img src={playIcon} alt="" />
							Play
						</button>
						<button
							className="button button--info"
							onClick={() => handleDetails(movie)}
						>
							<img src={infoIcon} alt="" />
							More Info
						</button>
					</span>

					<p className="hero__overview">
						{movie.overview ? movie.overview : 'No overview available'}
					</p>
				</div>
			</article>
		);
	}
};

export default Banner;

// Prototypes
Banner.propTypes = {
	fetchUrl: PropTypes.string,
};

