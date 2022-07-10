import { createContext, useState } from 'react';

export const GlobalContext = createContext();  // 

export const GlobalProvider = ({ children }) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [movie, setMovie] = useState('');

	const showMovieDetails = (movie) => { // show movie details in modal  
		setModalIsOpen(true);
		setMovie(movie);
	};

	const closeModal = () => {	// close modal when user clicks close
		setModalIsOpen(false);
		setMovie('');
	};

	return (
		<GlobalContext.Provider
			value={{ modalIsOpen, movie, showMovieDetails, closeModal }}
		>
			{children}
		</GlobalContext.Provider>
	);
};
