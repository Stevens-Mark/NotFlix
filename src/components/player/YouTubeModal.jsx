import React, { useEffect, useContext } from 'react';
import { Context } from '../../context/globalProvider';
import { createPortal } from 'react-dom';
// import components/functions...
import YoutubeEmbed from './YouTubeEmbed';
import Animate from '../../utils/Animate';
// import images/icons
import closeButton from '../../assets/icons/xmark.svg';
import noVideoImage from '../../assets/images/NoVideoImageWhite.webp';

/**
 * Renders a video modal
 * @function YoutTubeModal
 * @returns {JSX}
 */
const YouTubeModal = () => {
	const { trailerUrl, videoModalIsOpen, mediaVideoDetails, closeVideoModal } =
		useContext(Context);
	const media = mediaVideoDetails;

	// Focus Trap
	const modalVideoRef = React.createRef();

	const handleTabKey = (e) => {
		const focusableModalElements = modalVideoRef.current.querySelectorAll(
			'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
		);

		console.log(focusableModalElements)
		const firstElement = focusableModalElements[0];
		const lastElement =
			focusableModalElements[focusableModalElements.length - 1];
		if (!e.shiftKey && document.activeElement !== firstElement) {
			firstElement.focus();
			return e.preventDefault();
		}

		if (e.shiftKey && document.activeElement !== lastElement) {
			lastElement.focus();
			e.preventDefault();
		}
	};

	const handleKeydown = (e) => {
		const listener = keyListenersMap.get(e.keyCode); // get the listener corresponding to the pressed key
		return listener && listener(e); // call the listener if it exists
	};

	const keyListenersMap = new Map([
		[27, closeVideoModal],
		[9, handleTabKey],
	]);

	useEffect(() => {
		// set accessibility for modal open/closed
		const body = document.querySelector('body');
		const videoModal = document.getElementById('videoModal');
		body.setAttribute('aria-hidden', videoModalIsOpen ? 'true' : 'false');
		videoModal.setAttribute('aria-hidden', videoModalIsOpen ? 'false' : 'true');
		// initiate keyboard listener to focus trap modal
		videoModalIsOpen && document.addEventListener('keydown', handleKeydown);

		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	return createPortal(
		<div
		ref={modalVideoRef}
			id="videoModal"
			role="dialog"
			aria-modal="true"
			aria-labelledby="videoModal__title"
			className="videoModal"
			style={{
				animation: !videoModalIsOpen
					? 'modalBgFadeOut 0.1s ease-in-out both 0.4s'
					: 'modalBgFadeIn 0.1s ease-out both',
			}}
		>
			<Animate
				show={videoModalIsOpen}
				classType={'animateModal'}
				animateIn={'modalopen'}
				animateOut={'modalclose'}
			>
				<div className="videoModal__body">
					{media && (
						<>
							<section className="videoModal__content">
								<h1 className="sr-only" id="videoModal__title">
									{media?.title || media?.name || media?.original_title}
								</h1>
								<button
									aria-label="Close"
									className="videoModal__closeButton"
									onClick={() => closeVideoModal()}
								>
									<img src={closeButton} alt="close modal" />
								</button>
								{trailerUrl ? (
									<YoutubeEmbed embedId={trailerUrl} />
								) : (
									<div className="videoModal__noImage">
										<h2 className="sr-only">Sorry, No video available...</h2>
										<img src={noVideoImage} alt="No video available" />
									</div>
								)}
							</section>
						</>
					)}
				</div>
			</Animate>
		</div>,
		document.body
	);
};

export default YouTubeModal;

