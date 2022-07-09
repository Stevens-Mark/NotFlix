import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { IMAGE_URL } from '../config/requests';
import noImage from '../assets/images/NoImageAvailable.webp';
import closeButton from '../assets/icons/CloseCircle.svg';
/**
 * Renders a  modal
 * @function Modal
 * @param {function} closeModal:
 * @param {boolean} animation: optionally animate modal or not
 * @returns {JSX}
 */
const Modal = ({ closeModal, movie, animation }) => {
	const activeElement = document.activeElement;
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

	useEffect(() => {
		document.addEventListener('keydown', handleKeydown);
		document.querySelector('.modal__button').focus();
		return () => {
			document.removeEventListener('keydown', handleKeydown); // Detach listener when component unmounts
			activeElement.focus(); // Return focus to the previously focused element
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
					className="modal__button"
					onClick={() => closeModal()}
				>
					<img className="" src={closeButton} alt="close modal" />
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
					<h3 id="modal__title">
						{movie?.title || movie?.name || movie?.original_title}
					</h3>
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

