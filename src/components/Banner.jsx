import React from 'react';
import PropTypes from 'prop-types';
// import items needed for data fetch
import { useFetch } from '../config/FetchData';
// import { IMAGE_URL } from '../config/requests';
// import functions
import { randomSelect } from '../utils/functions';
import noImage from '../assets/images/NoImageAvailable.webp';

// for fetching mocked image
const IMAGE_URL = '../mockImages';

/**
 * Renders the Banner
 * @function Banner
 * @param {string} fetchUrl: path to data source
 * @returns {JSX} banner with image randomly selected
 */
const Banner = ({ fetchUrl }) => {
	const { data, isLoading, isError } = useFetch(fetchUrl);

	if (isLoading) {
		return <div className="hero__status">Loading...</div>;
	} else if (isError) {
		return <div className="hero__status">Error...</div>;
	} else {
		const movie = randomSelect(data.results);
		return (
			<section className="hero">
				<img
					className="hero__image"
					src={movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : noImage}
					alt={movie?.title || movie?.name || movie?.original_title}
				/>
				<div className="hero__shadow" />
				<div className="hero__info">
					<h1 className="hero__title">
						{movie?.title || movie?.name || movie?.original_title}
					</h1>
					<p className="hero__overview">
						{movie.overview ? movie.overview : 'No overview available'}
					</p>
				</div>
			</section>
		);
	}
};

export default Banner;

// Prototypes
Banner.propTypes = {
	fetchUrl: PropTypes.string,
};

