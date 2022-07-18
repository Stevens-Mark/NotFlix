import PropTypes from 'prop-types';
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
 * @param {function} handleDetails: sets modal open & put media details in state
 * @returns {JSX} media card
 */
const MediaCard = ({ media, handleDetails }) => {

	const handlePlay = (media) => {
		console.log(media.poster_path);
	};

	return (
		<>
			<div className="media__item">
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
					<div className="media__movieButtonsRow ">
						<button
							className="media__movieButtons media__movieButtons--normal"
							onClick={() => handlePlay(media)}
						>
							<img src={playIcon} alt="Watch trailer" />
						</button>

						<AddRemoveButton media={media} classType={'media__movieButtons'} />

						<button
							className="media__movieButtons media__movieButtons--normal"
							onClick={() => handleDetails(media)}
						>
							<img src={arrowDownIcon} alt="Get more information" />
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
	handleDetails: PropTypes.func.isRequired,
};

