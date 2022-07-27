import React, { useEffect, useContext } from 'react';
import { Context } from '../../context/globalProvider';
import { createPortal } from 'react-dom';
// import components/functions/libraries...
import FocusTrap from 'focus-trap-react';
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

	useEffect(() => {
		// set accessibility for modal open/closed
		const body = document.querySelector('body');
		const videoModal = document.getElementById('videoModal');
		body.setAttribute('aria-hidden', videoModalIsOpen ? 'true' : 'false');
		videoModal.setAttribute('aria-hidden', videoModalIsOpen ? 'false' : 'true');
	});

	return createPortal(
		<div
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
				<FocusTrap active={videoModalIsOpen}>
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
				</FocusTrap>
			</Animate>
		</div>,
		document.body
	);
};

export default YouTubeModal;

