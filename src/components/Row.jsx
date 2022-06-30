import React, { useEffect, useState } from 'react';
import axios from '../config/axios';
import { IMAGE_URL } from '../config/requests';
import noImage from '../assets/images/NoImageAvailable.jpg';

const Row = ({ title, fetchUrl }) => {
	const [movies, setMovies] = useState([]);

	// A snippet of code which runs based on a specific condition/variable
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

	return (
		<div className="row">
			<h2>{title}</h2>

			<div className="card__row">
				{movies.map((movie) => (
					<div className="card" key={movie.id}>
						<img
							className="card__image"
							src={
								movie.poster_path ? `${IMAGE_URL}${movie.poster_path}` : noImage
							}
							alt={movie.name}
						/>
						<button className="card__button" onClick={() => handleClick(movie)}>
							Click
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Row;
