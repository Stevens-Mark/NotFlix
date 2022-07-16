import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import items needed for data fetch
import axios from '../config/requests';
import { IMAGE_URL } from '../config/requests';
import { randomSelect } from '../utils/functions';
// import components
import Loader from './Loader';
import LoadError from './LoadError';
import Modal from './Modal';
import useModal from '../utils/useModal';
// import images/icons
import noImage from '../assets/images/NoImageAvailable.webp';
import infoIcon from '../assets/icons/alert-circle-outline.svg';
import playIcon from '../assets/icons/play.svg';

/**
 * Renders the Banner
 * @function Banner
 * @param {string} fetchUrl: path to data source
 * @returns {JSX} banner with image randomly selected
 */
const Banner = ({ fetchUrl }) => {

	const { modalIsOpen, mediaDetails, closeModal, handleDetails } = useModal();
	const [media, setMedia] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setLoading(true);
		async function fetchData() {
			try {
				const request = await axios.get(fetchUrl);
				// const request = await axios.get("");  // used for mocking data
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

	const handlePlay = (media) => {
		console.log(media)
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
		return (
			<>
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
								onClick={() => handlePlay(media)}
							>
								<img src={playIcon} alt="" />
								Play
							</button>
							<button
								className="button button--info"
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
				{modalIsOpen && <Modal closeModal={closeModal} media={mediaDetails} />}
			</>
		);
	}
};

export default Banner;

// Prototypes
Banner.propTypes = {
	fetchUrl: PropTypes.string.isRequired,
};

