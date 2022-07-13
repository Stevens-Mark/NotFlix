import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import items needed for data fetch
import { useFetch } from '../config/FetchData';
import { IMAGE_URL } from '../config/requests';
// import components
import GenresList from './GenreList';
import Loader from './Loader';
import LoadError from './LoadError';
import Modal from './modal';
import useModal from '../utils/useModal';
// import images/icons
import noImage from '../assets/images/NoImageAvailable.webp';
import playIcon from '../assets/icons/chevronRight.svg';
import plusIcon from '../assets/icons/plusSolid.svg';
import arrowDownIcon from '../assets/icons/chevronDown.svg';

/**
 * Renders each carousel slidder for each category
 * @function SimpleSlidder
 * @param {string} title of category
 * @param {string} fetchUrl: URL endpoint to make a data request for assocaited category
 * @returns
 */
const SimpleSlidder = ({ title, fetchUrl }) => {
	const { modalIsOpen, movieDetails, closeModal, handleDetails } = useModal();
	const { data, isLoading, isError } = useFetch(fetchUrl);
	const movies = data.results;

	const handlePlay = (movie) => {
		console.log(movie);
	};

	const handleLike = (movie) => {
		console.log(movie);
	};

	var settings = {
		dots: false,
		infinite: true,
		lazyLoad: true,
		speed: 3000,
		slidesToShow: 6,
		slidesToScroll: 6,

		responsive: [
			{
				breakpoint: 1680,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				},
			},
			{
				breakpoint: 1439,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					speed: 1500,
				},
			},
			{
				breakpoint: 460,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 1000,
				},
			},
		],
	};

	return (
		<>
			<section className="row">
				<h2 className="row__title">{title}</h2>
				{isLoading ? (
					<div className="row__status">
						<Loader />
					</div>
				) : (
					<>
						{isError ? (
							<div className="row__status">
								<LoadError />
							</div>
						) : (
							<>
								<Slider {...settings}>
									{movies.map((movie) => (
										<div className="row__movie" key={movie.id}>
											<img
												className="row__movieImage"
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
												alt={
													movie?.title || movie?.name || movie?.original_title
												}
											/>
											<div className="row__buttonsContainer">
												<div className="row__movieButtonsRow">
													<button
														className="row__movieButtons"
														onClick={() => handlePlay(movie)}
													>
														<img src={playIcon} alt="Watch trailer" />
													</button>
													<button
														className="row__movieButtons"
														onClick={() => handleLike(movie)}
													>
														<img src={plusIcon} alt="Add film to watch list" />
													</button>
													<button
														className="row__movieButtons"
														onClick={() => handleDetails(movie)}
													>
														<img
															src={arrowDownIcon}
															alt="Get more information"
														/>
													</button>
												</div>
												<h3>
													{movie?.title || movie?.name || movie?.original_title}
												</h3>
												<GenresList
													genreIds={movie.genre_ids}
													variants={'slidder'}
												/>
											</div>
										</div>
									))}
								</Slider>
							</>
						)}
					</>
				)}
			</section>
			{modalIsOpen && (
				<Modal
					modalIsOpen={modalIsOpen}
					closeModal={closeModal}
					movie={movieDetails}
				/>
			)}
		</>
	);
};

export default SimpleSlidder;

// Prototypes
SimpleSlidder.propTypes = {
	title: PropTypes.string.isRequired,
	fetchUrl: PropTypes.string.isRequired,
};

