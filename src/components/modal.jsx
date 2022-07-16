import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
// import components/functions...
import AddRemoveButton from './buttons/AddRemoveButton';
import { IMAGE_URL } from '../config/requests';
import GenresList from './GenreList';
import { ConvertDate, capitalize } from '../utils/functions';
// import images/icons
import noImage from '../assets/images/NoImageAvailable.webp';
import closeButton from '../assets/icons/xmark.svg';
import playIcon from '../assets/icons/play.svg';

/**
 * Renders a  modal
 * @function Modal
 * @param {Object} media: movie or TV show data
 * @param {function} closeModal: set state to close modal
 * @returns {JSX}
 */
const Modal = ({ media, closeModal }) => {
	const portalContainer = document.getElementById('modal-portal');
	// const activeElement = document.activeElement;

	const handleEscape = () => {
		closeModal();
	};

	const handlekeys = (e) => {
		e.preventDefault();
	}; // prevent keys: effectively traps focus in modal

	const keyListenersMap = new Map([
		// map of keyboard listeners
		[27, handleEscape],
		[9, handlekeys],
		[18, handlekeys],
		[37, handlekeys],
		[38, handlekeys],
		[39, handlekeys],
		[40, handlekeys],
	]);

	const handleKeydown = (e) => {
		const listener = keyListenersMap.get(e.keyCode); // get the listener corresponding to the pressed key
		return listener && listener(e); // call the listener if it exists
	};

	const handleClick = (media) => {
		console.log(media);
	};

	useEffect(() => {
		document.addEventListener('keydown', handleKeydown);
		document.querySelector('.modal__closeButton').focus();
		return () => {
			document.removeEventListener('keydown', handleKeydown); // Detach listener when component unmounts
			// activeElement.focus(); // Return focus to the previously focused element
		};
	});

	return createPortal(
		<div
			className="modal"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal__title"
		>
			<div className="modal__body">
				<header>
					<button
						aria-label="Close"
						className="modal__closeButton"
						onClick={() => closeModal()}
					>
						<img src={closeButton} alt="close modal" />
					</button>

					<img
						className="modal__image"
						src={
							media.backdrop_path !== null
								? `${IMAGE_URL}${media.backdrop_path}`
								: media.poster_path !== null
								? `${IMAGE_URL}${media.poster_path}`
								: noImage
						}
						alt={media?.title || media?.name || media?.original_title}
					/>

					<span className="modal__buttons">
						<button
							className="button button--playModal"
							onClick={() => handleClick(media)}
						>
							<img src={playIcon} alt="" />
							Play
						</button>

						<AddRemoveButton media={media} classType={'modal__likeButton'} />
					</span>
				</header>

				<section className="modal__content">
					<h1 id="modal__title">
						{media?.title || media?.name || media?.original_title}
					</h1>
					<p className="modal__details__overview modal__details__animate--1">
						{media.overview ? media.overview : 'Not available'}
					</p>
					<article>
						<h2>Details</h2>
						<div className="modal__details">
							<span className="modal__details__label modal__details__animate--2">
								Genres :{' '}
							</span>
							<span className="modal__details__text modal__details__animate--2">
								<GenresList genreIds={media.genre_ids} classType={'modal'} />
							</span>

							<span className="modal__details__label modal__details__animate--3">
								Original Language :{' '}
							</span>
							<span className="modal__details__text modal__details__animate--3">
								{capitalize(media?.original_language)}
							</span>

							<span className="modal__details__label modal__details__animate--4">
								{media.release_date ? 'Release Date' : 'First Aired'}{' '}
							</span>
							<span className="modal__details__text modal__details__animate--4">
								{media.release_date
									? ConvertDate(media.release_date)
									: media.first_air_date
									? ConvertDate(media.first_air_date)
									: 'Not Available'}
							</span>

							<span className="modal__details__label modal__details__animate--5">
								Average Vote :{' '}
							</span>
							<span className="modal__details__text modal__details__animate--5">
								{media.vote_average
									? Math.round(media.vote_average)
									: 'Not Available'}
							</span>
						</div>
					</article>
				</section>
			</div>
		</div>,
		portalContainer
	);
};

export default Modal;

// Prototypes
Modal.propTypes = {
	media: PropTypes.object.isRequired,
	closeModal: PropTypes.func.isRequired,
};

