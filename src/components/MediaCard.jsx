import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context/globalProvider';
import { IMAGE_URL } from '../config/requests';
// import components
import GenresList from './GenreList';
import AddRemoveButton from './buttons/AddRemoveButton';
// import images/icons
import noImage from '../assets/images/NoImageAvailable.webp';
import playIcon from '../assets/icons/chevronRight.svg';
import arrowDownIcon from '../assets/icons/chevronDown.svg';

/**
 * @function MediaCard
 * @param {object} media: movie or TV show data
 * @returns {JSX} media card
 */
const MediaCard = ({ media }) => {
	
	const { handleDetails, handleVideoDetails, setOpenedFromModal } = useContext(Context);

	const buttonsRef = React.createRef();

	useEffect(() => {
		const buttons = buttonsRef.current.querySelectorAll('button');
		buttons.forEach(button => {
			button.addEventListener('focus', focusParent)
			button.addEventListener('blur', blurParent)
		});
		
		return () => {
			buttons.forEach(button => {
				button.removeEventListener('focus', focusParent)
				button.removeEventListener('blur', blurParent)
			});
		}
	}, [buttonsRef])


	const focusParent =(event) => {
		const mediaItem = event.target.parentNode.parentNode.parentNode;
		const btnContainer = event.target.parentNode.parentNode;;
		mediaItem.classList.add('media__itemFocus');
		btnContainer.classList.add('media__btnContainerFocus');
	}
	
	const blurParent = (event) => {
		const mediaItem = event.target.parentNode.parentNode.parentNode;
		const btnContainer = event.target.parentNode.parentNode;
		mediaItem.classList.remove('media__itemFocus');
		btnContainer.classList.remove('media__btnContainerFocus');
	}

	
	return (
		<>
			<div ref={buttonsRef} className="media__item">
				<img
					className="media__itemImage"
					src={
						media.backdrop_path !== null
							? `${IMAGE_URL}${media.backdrop_path}`
							: media.poster_path !== null
							? `${IMAGE_URL}${media.poster_path}`
							: noImage
					}
					alt={media?.title || media?.name || media?.original_title}
				/>
				<div className="media__buttonsContainer">
					<div  className="media__movieButtonsRow ">
						<button
							className="media__movieButtons media__movieButtons--normal"
							aria-label="Play Video Trailer"
							onClick={() => {handleVideoDetails(media); setOpenedFromModal(false);}}
						>
							<img src={playIcon} alt="" />
						</button>

						<AddRemoveButton media={media} classType={'media__movieButtons'} />

						<button
							className="media__movieButtons media__movieButtons--normal"
							aria-label="Show more information"
							onClick={() => handleDetails(media)}
						>
							<img src={arrowDownIcon} alt="" />
						</button>
					</div>
					<h3>{media?.title || media?.name || media?.original_title}</h3>
					{media.genre_ids && (
						<GenresList genreIds={media.genre_ids} classType={'slidder'} />
					)}
				</div>
			</div>
		</>
	);
};

export default MediaCard;

// Prototypes
MediaCard.propTypes = {
	media: PropTypes.object.isRequired,
};

