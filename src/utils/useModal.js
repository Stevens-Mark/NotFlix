import { useState } from 'react';

/**
 * Custom hook to manage modal state open/close, displaying media item
 * @function useModal
 * @returns 
 */
const useModal = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [movieDetails, setMovieDetails] = useState('');

	// prevent background moving when modal open
	// const body = document.querySelector('body');
	// body.style.overflow = modalIsOpen ? 'hidden' : 'auto';
	// const html = document.querySelector('html');
	// html.style.overflow = modalIsOpen ? 'hidden' : 'auto';
	
	const closeModal = () => {
		setModalIsOpen(false);
		setMovieDetails('');
	};

	const handleDetails = (movie) => {
		setModalIsOpen(true);
		setMovieDetails(movie);
	};

	return { modalIsOpen, movieDetails, closeModal, handleDetails };
};

export default useModal;
