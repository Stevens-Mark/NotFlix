import PropTypes from 'prop-types';
import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../context/globalProvider';
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
 * @returns {JSX}
 */
const Modal = () => {
	const { modalIsOpen, movie, closeModal } = useContext(GlobalContext);

	// const activeElement = document.activeElement;
	console.log(movie);

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
		document.addEventListener('keydown', handleKeydown);
		// document.querySelector(".modal__closeButton").focus();
		return () => {
			document.removeEventListener('keydown', handleKeydown); // Detach listener when component unmounts
			// activeElement.focus(); // Return focus to the previously focused element
		};
	});

	return (
		<>
			{modalIsOpen && (
				<div
					className="modal"
					role="dialog"
					aria-modal="true"
					aria-labelledby="modal__title"
					>
					<div className="modal__body">
						<button
							aria-label="Close"
							className="modal__closeButton"
							onClick={() => closeModal()}
						>
							<img src={closeButton} alt="close modal" />
						</button>

						<div className="modal__content">
							<img
								className="modal__image"
								src={
									movie.backdrop_path
										? `${IMAGE_URL}${movie.backdrop_path}`
										: noImage
								}
								alt={movie?.title || movie?.name || movie?.original_title}
							/>

							<div className="modal__buttons">
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
							</div>

							<div className="modal__detailsContainer">
								<h1 id="modal__title">
									{movie?.title || movie?.name || movie?.original_title}
								</h1>
								<p className="modal__details__text">
									{movie.overview ? movie.overview : 'Not available'}
								</p>

								<h2>Details</h2>
								<div className="modal__details">
									<span className="modal__details__label">Genres : </span>
									<span className="modal__details__text">
									<GenresList genreIds={movie.genre_ids} variants={'modal'} /></span>

									<span className="modal__details__label">
										Original Language :{' '}
									</span>
									<span className="modal__details__text">
										{capitalize(movie?.original_language)}
									</span>

									<span className="modal__details__label">Release Date : </span>
									<span className="modal__details__text">
										{movie.release_date
											? ConvertDate(movie.release_date)
											: 'Not Available'}
									</span>

									<span className="modal__details__label">Average Vote : </span>
									<span className="modal__details__text">
										{movie.vote_average
											? Math.round(movie.vote_average)
											: 'No Available'}{' '}
										%
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;

// Prototypes
Modal.propTypes = {
	animation: PropTypes.bool,
};

