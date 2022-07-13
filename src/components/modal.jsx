import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
// import components/functions
import { IMAGE_URL } from '../config/requests';
import GenresList from './GenreList';
import { ConvertDate, capitalize } from '../utils/functions';
// import images/icons
import noImage from '../assets/images/NoImageAvailable.webp';
import closeButton from '../assets/icons/xmark.svg';
import playIcon from '../assets/icons/play.svg';
import plusIcon from '../assets/icons/plusSolid.svg';

/**
 * Renders a  modal
 * @function Modal
 * @param {Bollean} modalIsOpen: whether open/closed
 * @param {Object} movie: movie or TV show data
 * @param {function} closeModal: set state to close modal
 * @returns {JSX}
 */
const Modal = ({ modalIsOpen, movie, closeModal }) => {
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

	const handleClick = (movie) => {
		console.log(movie);
	};

	useEffect(() => {
		// initialise focus trap
		modalIsOpen && document.addEventListener('keydown', handleKeydown);
		modalIsOpen && document.querySelector('.modal__closeButton').focus();

		return () => {
			document.removeEventListener('keydown', handleKeydown); // Detach listener when component unmounts
			// activeElement.focus(); 																	// Return focus to the previously focused element
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [modalIsOpen]);

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
						// src={
						// 	movie.backdrop_path
						// 		? `${IMAGE_URL}${movie.backdrop_path}`
						// 		: noImage
						// }
						src={
							movie.backdrop_path !== null
								? `${IMAGE_URL}${movie.backdrop_path}`
								: movie.poster_path !== null
								? `${IMAGE_URL}${movie.poster_path}`
								: noImage
						}
						alt={movie?.title || movie?.name || movie?.original_title}
					/>

					<span className="modal__buttons">
						<button
							className="button button--playModal"
							onClick={() => handleClick(movie)}
						>
							<img src={playIcon} alt="" />
							Play
						</button>
						<button
							className="modal__likeButton"
							onClick={() => handleClick(movie)}
						>
							<img src={plusIcon} alt="Add film to watch list" />
						</button>
					</span>
				</header>

				<section className="modal__content">
					<h1 id="modal__title">
						{movie?.title || movie?.name || movie?.original_title}
					</h1>
					<p className="modal__details__overview modal__details__animate--1">
						{movie.overview ? movie.overview : 'Not available'}
					</p>
					<article>
						<h2>Details</h2>
						<div className="modal__details">
							<span className="modal__details__label modal__details__animate--2">
								Genres :{' '}
							</span>
							<span className="modal__details__text modal__details__animate--2">
								<GenresList genreIds={movie.genre_ids} variants={'modal'} />
							</span>

							<span className="modal__details__label modal__details__animate--3">
								Original Language :{' '}
							</span>
							<span className="modal__details__text modal__details__animate--3">
								{capitalize(movie?.original_language)}
							</span>

							<span className="modal__details__label modal__details__animate--4">
								{movie.release_date ? 'Release Date' : 'First Aired'}{' '}
							</span>
							<span className="modal__details__text modal__details__animate--4">
								{movie.release_date
									? ConvertDate(movie.release_date)
									: movie.first_air_date
									? ConvertDate(movie.first_air_date)
									: 'Not Available'}
							</span>

							<span className="modal__details__label modal__details__animate--5">
								Average Vote :{' '}
							</span>
							<span className="modal__details__text modal__details__animate--5">
								{movie.vote_average
									? Math.round(movie.vote_average)
									: 'No Available'}
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
	modalIsOpen: PropTypes.bool.isRequired,
	movie: PropTypes.object.isRequired,
	closeModal: PropTypes.func.isRequired,
};

