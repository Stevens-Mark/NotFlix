import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import items needed for data fetch
import axios from '../config/axios';
import { IMAGE_URL } from '../config/requests';
import { randomSelect } from '../utils/functions';
import noImage from '../assets/images/NoImageAvailable.webp';
import { truncateString } from '../utils/functions';

/**
 * Renders the Banner
 * @function Banner
 * @param {string} fetchUrl
 * @returns {JSX} banner with image randomly selected
 */
const Banner = ({ fetchUrl }) => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(fetchUrl);
			setMovie(randomSelect(request.data.results));
		};
		fetchData();
	}, [fetchUrl]);

	console.log(movie);

	return (
		<div className="banner">
			<img
				className="banner__image"
				src={movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : noImage}
				alt={movie.name ? movie.name : movie.original_title}
			/>
			<div className="banner__shadow"></div>
			<div className="banner__info">
				<h1 className="banner__title">
					{movie.name ? movie.name : movie.original_title}
				</h1>
				<p className="banner__overview">
					{movie.overview ? truncateString(movie.overview, 20000) : 'No overview available'}
				</p>
			</div>
		</div>
	);
};

export default Banner;

// Prototypes
Banner.propTypes = {
	fetchUrl: PropTypes.string,
};
