import { useState } from 'react';

/**
 * Custom hook to manage modal state open/close, displaying media item
 * and stop background scrolling when modal open
 * @function useModal
 * @returns boolean (state open/close) & state management functions
 */
const useModal = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [mediaDetails, setMediaDetails] = useState('');

	// prevent background moving when modal open
	const body = document.querySelector('body');
	body.style.overflow = modalIsOpen ? 'hidden' : 'auto';
	const html = document.querySelector('html');
	html.style.overflow = modalIsOpen ? 'hidden' : 'auto';
	
	const closeModal = () => {
		setModalIsOpen(false);
		setMediaDetails('');
	};

	const handleDetails = (media) => {
		setModalIsOpen(true);
		setMediaDetails(media);
	};

	return { modalIsOpen, mediaDetails, closeModal, handleDetails };
};

export default useModal;
