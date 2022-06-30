import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import items needed for data fetch
import axios from '../config/axios';
import { IMAGE_URL } from '../config/requests';
// import components
import GenresList from './GenreList';
import noImage from '../assets/images/NoImageAvailable.webp';

const SimpleSlider = ({ title, fetchUrl }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
		};
		fetchData();
	}, [fetchUrl]);

	console.log(movies);

	// const handleClick = (movie) => {
	// 	console.log(movie);
	// };

	var settings = {
		dots: false,
		infinite: true,
		speed: 3000,
		slidesToShow: 6,
		slidesToScroll: 6,

		responsive: [
			{
				breakpoint: 1440,
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
				breakpoint: 425,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					speed: 1000,
				},
			},
		],
	};

	return (
		<div className="row">
			<h2>{title}</h2>
			<Slider {...settings}>
				{movies.map((movie) => (
					<div className="row__item" key={movie.id}>
						<img
							src={
								movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : noImage
							}
							alt={movie.name}
						/>
						<div className="row__itemInfo">
							<h2>{movie.name ? movie.name : movie.original_title}</h2>
							<GenresList genreIds={movie.genre_ids} />
							{/* <button
								className="row__button"
								onClick={() => handleClick(movie)}
							>
								Click
							</button> */}
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default SimpleSlider;
