import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
// import items needed for data fetch
import { useFetch } from '../config/FetchData';
import { IMAGE_URL } from '../config/requests';
// import components
import GenresList from './GenreList';
import Loader from './Loader';
import LoadError from './LoadError';
import Modal from './modal';

// import images/icons
import noImage from '../assets/images/NoImageAvailable.webp';
import playIcon from '../assets/icons/chevronRight.svg';
import plusIcon from '../assets/icons/plusSolid.svg';
import arrowDownIcon from '../assets/icons/chevronDown.svg';

/**
 * Renders each carousel slider for each category
 * @function SimpleSlider
 * @param {string} title of category
 * @param {string} fetchUrl: URL endpoint to make a data request for assocaited category
 * @returns
 */
const SimpleSlider = ({ title, fetchUrl }) => {
	const { data, isLoading, isError } = useFetch(fetchUrl);
	const movies = data.results;

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [movieDetails, setMovieDetails] = useState('');

	const closeModal = () => {
		setModalIsOpen(false);
		setMovieDetails('none');
	};

	const handleClick = (movie) => {
		setModalIsOpen(true);
		setMovieDetails(movie);
	};

	
	var settings = {
		dots: false,
		infinite: true,
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
									<div className="row__item" key={movie.id}>
										<img
											className="row__item__image"
											src={
												movie.poster_path
													? `${IMAGE_URL}${movie.poster_path}`
													: noImage
											}
											alt={movie?.title || movie?.name || movie?.original_title}
										/>
										<div className="row__itemInfo">
											<div className="row__buttons">
												<button
													className="row__itemButtons"
													onClick={() => handleClick(movie)}
												>
													<img src={playIcon} alt="Watch trailer" />
												</button>
												<button
													className="row__itemButtons"
													onClick={() => handleClick(movie)}
												>
													<img src={plusIcon} alt="Add film to watch list" />
												</button>
												<button
													className="row__itemButtons"
													onClick={() => handleClick(movie)}
												>
													<img src={arrowDownIcon} alt="Get more information" />
												</button>
											</div>
											<h3>
												{movie?.title || movie?.name || movie?.original_title}
											</h3>
											<GenresList genreIds={movie.genre_ids} />
										</div>
									</div>
								))}
							</Slider>
						</>
					)}
				</>
			)}
			{modalIsOpen && <Modal closeModal={closeModal} movie={movieDetails}/>}
		</section>
	);
};

export default SimpleSlider;

// Prototypes
SimpleSlider.propTypes = {
	title: PropTypes.string,
	fetchUrl: PropTypes.string,
};

