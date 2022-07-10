import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { IMAGE_URL } from '../config/requests';
import GenresList from './GenreList';
import noImage from '../assets/images/NoImageAvailable.webp';
import closeButton from '../assets/icons/CloseCircle.svg';
import playIcon from '../assets/icons/play.svg';
import plusIcon from '../assets/icons/plusSolid.svg';
/**
 * Renders a  modal
 * @function Modal
 * @param {function} closeModal:
 * @param {boolean} animation: optionally animate modal or not
 * @returns {JSX}
 */
const Modal = ({ closeModal, movie, animation }) => {
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
		document.querySelector('.modal__closeButton').focus();
		return () => {
			document.removeEventListener('keydown', handleKeydown); // Detach listener when component unmounts
			// activeElement.focus(); // Return focus to the previously focused element
		};
	});

	return (
		<div
			className="modal"
			animation={animation}
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal__title"
		>
			<div className="modal__body" animation={animation}>
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
					<div className="modal__content__info">
						<h1 id="modal__title">
							{movie?.title || movie?.name || movie?.original_title}
						</h1>
						<p>{movie.overview ? movie.overview : 'Not available'}</p>
						<div className="modal__content__details">
							<h2>Details</h2>
							<span className="modal__content__genres">
								<p>Genres : </p> <GenresList genreIds={movie.genre_ids} />
							</span>
							<p>
								Original Language : {movie?.original_language.toUpperCase()}
							</p>
							<p>
								Release Date :{' '}
								{movie.release_date ? movie.release_date : 'Not Available'}
							</p>
							<p>
								Average Vote :{' '}
								{movie.vote_average
									? Math.round(movie.vote_average)
									: 'Not Available'}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;

// Prototypes
Modal.propTypes = {
	closeModal: PropTypes.func.isRequired,
};

