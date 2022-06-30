import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from '../config/axios';
import { IMAGE_URL } from '../config/requests';
import noImage from '../assets/images/NoImageAvailable.jpg';

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

	const handleClick = (movie) => {
		console.log(movie);
	};

	var settings = {
		dots: false,
		infinite: true,
		speed: 3000,
		slidesToShow: 7,
		slidesToScroll: 7,
	};

	return (
		<div className="container">
			<h2>{title}</h2>
			<Slider {...settings}>
				{movies.map((movie) => (
					<div className="poster" key={movie.id}>
						<img
							className="poster__image"
							src={
								movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : noImage
							}
							alt={movie.name}
						/>
						<button
							className="poster__button"
							onClick={() => handleClick(movie)}
						>
							Click
						</button>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default SimpleSlider;
