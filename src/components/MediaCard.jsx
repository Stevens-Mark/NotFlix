import PropTypes from 'prop-types';
import { IMAGE_URL } from '../config/requests'
// import components
import GenresList from './GenreList';
import AddRemoveButton from './buttons/AddRemoveButton';
// import images/icons
import noImage from '../assets/images/NoImageAvailable.webp';
import playIcon from '../assets/icons/chevronRight.svg';
import arrowDownIcon from '../assets/icons/chevronDown.svg';

/**
 * @function MediaCard
 * @param {object} movie: movie or TV show data
 * @param {function} handleDetails: sets modal open & put media details in state
 * @returns {JSX} media card
 */
const MediaCard = ({movie, handleDetails}) => {

  const handlePlay = (movie) => {
		console.log(movie);
	};

	return (
		<>
			<img
				className="row__movieImage"
				src={
					movie.backdrop_path !== null
						? `${IMAGE_URL}${movie.backdrop_path}`
						: movie.poster_path !== null
						? `${IMAGE_URL}${movie.poster_path}`
						: noImage
				}
				alt={movie?.title || movie?.name || movie?.original_title}
			/>
			<div className="row__buttonsContainer">
				<div className="row__movieButtonsRow ">
					<button
						className="row__movieButtons row__movieButtons--normal"
						onClick={() => handlePlay(movie)}
					>
						<img src={playIcon} alt="Watch trailer" />
					</button>

					<AddRemoveButton movie={movie} classType={'row__movieButtons'} />

					<button
						className="row__movieButtons row__movieButtons--normal"
						onClick={() => handleDetails(movie)}
					>
						<img src={arrowDownIcon} alt="Get more information" />
					</button>
				</div>
				<h3>{movie?.title || movie?.name || movie?.original_title}</h3>
				<GenresList genreIds={movie.genre_ids} classType={'slidder'} />
			</div>
		</>
	);
};

export default MediaCard;

// Prototypes
MediaCard.propTypes = {
	movie: PropTypes.object.isRequired,
	handleDetails: PropTypes.func.isRequired,
};
