import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalProvider';
// import images/icons
import playIcon from '../assets/icons/chevronRight.svg';
import plusIcon from '../assets/icons/plusSolid.svg';
import arrowDownIcon from '../assets/icons/chevronDown.svg';

const SlidderBtns = ({ movie }) => {
	const { showMovieDetails } = useContext(GlobalContext);

	const handlePlay = (movie) => {
		console.log(movie);
	};

	const handleLike = (movie) => {
		// Actions: when 1 of 3 buttons clicked
		console.log(movie);
	};

	const handleDetails = (movie) => {
		showMovieDetails(movie); // show movie details in modal
	};

	return (
		<div className="row__buttons">
			<button className="row__itemButtons" onClick={() => handlePlay(movie)}>
				<img src={playIcon} alt="Watch trailer" />
			</button>
			<button className="row__itemButtons" onClick={() => handleLike(movie)}>
				<img src={plusIcon} alt="Add film to watch list" />
			</button>
			<button className="row__itemButtons" onClick={() => handleDetails(movie)}>
				<img src={arrowDownIcon} alt="Get more information" />
			</button>
		</div>
	);
};

export default SlidderBtns;
