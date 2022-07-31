import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/globalProvider';
// import items needed for data fetch
import axios from '../config/requests';
import { IMAGE_URL } from '../config/requests';
import { randomSelect } from '../utils/functions';
// import components
import Loader from './Loader';
import LoadError from './LoadError';
// import images/icons
import noImage from '../assets/images/NoImageAvailable.webp';
import infoIcon from '../assets/icons/alert-circle-outline.svg';
import playIcon from '../assets/icons/play.svg';

/**
 * Renders the Hero Banner
 * @function Banner
 * @param {string} fetchUrl: path to data source
 * @returns {JSX} Hero banner with image randomly selected
 */
const Banner = ({ fetchUrl }) => {

	const { handleDetails, handleVideoDetails, setOpenedFromModal } = useContext(Context);

	const [media, setMedia] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setLoading(true);
		async function fetchData() {
			try {
				// const request = await axios.get(fetchUrl);
				const request = await axios.get("");  // used for mocking data
				setMedia(randomSelect(request.data.results));
			} catch (err) {
				console.log(err);
				setIsError(true);
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, [fetchUrl]); // ONLY replace banner image if url updated

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
		return (
				<article className="hero">
					<img
						className="hero__image"
						src={
							media.backdrop_path !== null
								? `${IMAGE_URL}${media.backdrop_path}`
								: media.poster_path !== null
								? `${IMAGE_URL}${media.poster_path}`
								: noImage
						}
						alt={media?.title || media?.name || media?.original_title}
					/>
					<span className="hero__mask" />
					<span className="hero__shadow" />
					<div className="hero__info">
						<h2 className="hero__title">
							{media?.title || media?.name || media?.original_title}
						</h2>
						<span className="buttons">
							<button
								className="button button--play"
								aria-label="Play Video Trailer"
								onClick={() => {handleVideoDetails(media); setOpenedFromModal(false);}}
							>
								<img src={playIcon} alt="" />
								Play
							</button>
							<button
								className="button button--info"
								aria-label="Show more information"
								onClick={() => handleDetails(media)}
							>
								<img src={infoIcon} alt="" />
								More Info
							</button>
						</span>

						<p className="hero__overview">
							{media.overview ? media.overview : 'No overview available'}
						</p>
					</div>
				</article>
		);
	}
};

export default Banner;

// Prototypes
Banner.propTypes = {
	fetchUrl: PropTypes.string.isRequired,
};

