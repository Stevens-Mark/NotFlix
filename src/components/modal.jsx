import React, { useEffect, useContext } from 'react';
import { Context } from '../context/globalProvider';
import { createPortal } from 'react-dom';
// import components/functions/libraries...
import FocusTrap from 'focus-trap-react';
import Animate from '../utils/Animate';
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
 * @returns {JSX}
 */
const Modal = () => {
	
	const {
		modalIsOpen,
		videoModalIsOpen,
		mediaDetails,
		handleVideoDetails,
		closeModal,
		setOpenedFromModal,
	} = useContext(Context);

	const media = mediaDetails;

	// map of keyboard listeners
	const keyListenersMap = new Map([[27, closeModal]]);

	const handleKeydown = (e) => {
		const listener = keyListenersMap.get(e.keyCode); // get the listener corresponding to the pressed key
		return listener && listener(e); // call the listener if it exists
	};

	useEffect(() => {
		// set accessibility for modal open/closed
		const body = document.querySelector('body');
		const modal = document.getElementById('modal');
		body.setAttribute('aria-hidden', modalIsOpen || videoModalIsOpen ? 'true' : 'false');
		modal.setAttribute('aria-hidden', modalIsOpen ? 'false' : 'true');
		// initiate keyboard listener to handle escape key event
		modalIsOpen && document.addEventListener('keydown', handleKeydown);
		return () => {
			// Detach listener when component unmounts
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	return createPortal(
		<div
			id="modal"
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal__title"
			className="modal"
			style={{
				animation: !modalIsOpen
					? 'modalBgFadeOut 0.8s ease-in-out both'
					: 'modalBgFadeIn 0.8s ease-out both',
			}}
		>
			<Animate
				show={modalIsOpen}
				classType={'animateModal'}
				animateIn={'modalopen'}
				animateOut={'modalclose'}
			>
				<FocusTrap
					active={modalIsOpen}
					// focusTrapOptions={{
					// 	returnFocusOnDeactivate: false,
					// }}
				>
					<div className="modal__body">
						{media && (
							<>
								<header>
									<button
										aria-label="Close"
										className="modal__closeButton"
										onClick={() => closeModal()}
									>
										<img src={closeButton} alt="close info window" />
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
											aria-label="Play Video Trailer"
											onClick={() => {
												handleVideoDetails(media);
												setOpenedFromModal(true);
											}}
										>
											<img src={playIcon} alt="" />
											Play
										</button>

										<AddRemoveButton
											media={media}
											classType={'modal__likeButton'}
										/>
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
												{media.genre_ids && (
													<GenresList
														genreIds={media.genre_ids}
														classType={'modal'}
													/>
												)}
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
												{media.vote_average || media.vote_average === 0
													? Math.round(media.vote_average)
													: 'Not Available'}
											</span>
										</div>
									</article>
								</section>
							</>
						)}
					</div>
				</FocusTrap>
			</Animate>
		</div>,
		document.body
	);
};

export default Modal;

