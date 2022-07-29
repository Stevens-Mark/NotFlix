import movieTrailer from 'movie-trailer';
import React, { useState, useEffect } from 'react';
import { createContext } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
	// HANDLE WATCH LIST
	// *****************
	const [watchListItems, setwatchListItems] = useState([]);

	// Local Storage: setting & getting data
	useEffect(() => {
		const watchListItemData = JSON.parse(localStorage.getItem('watchListItem'));

		if (watchListItemData) {
			setwatchListItems(watchListItemData);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('watchListItem', JSON.stringify(watchListItems));
	}, [watchListItems]);

	const addToWatchList = (newItem) => {
		setwatchListItems((prevItems) => [...prevItems, newItem]);
	};

	const removeFromWatchList = (id) => {
		setwatchListItems((prevItems) =>
			prevItems.filter((item) => item.id !== id)
		);
	};

	// HANDLE MODAL SECTION
	// ********************
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [mediaDetails, setMediaDetails] = useState('');

	const closeModal = () => {
		setModalIsOpen(false);
		// setMediaDetails('');
	};

	const handleDetails = (media) => {
		setModalIsOpen(true);
		setMediaDetails(media);
	};

	// go back to modal from video modal (if originally opened from modal)
	const [openedFromModal, setOpenedFromModal] = useState(false);

	const returnToModal = () => {
		setVideoModalIsOpen(false);
		setTimeout(() => {
			setModalIsOpen(true);
		}, '600');
	};

	// HANDLE VIDEO (YOUTUBE) MODAL SECTION
	// ************************************
	const [videoModalIsOpen, setVideoModalIsOpen] = useState(false);
	const [mediaVideoDetails, setMediaVideoDetails] = useState('');
	const [trailerUrl, setTrailerUrl] = useState('');

	const closeVideoModal = () => {
		setVideoModalIsOpen(false);
		// setTrailerUrl('');
	};

	const handleVideoDetails = (media) => {
		if (trailerUrl) {
			setTrailerUrl('');
		}
		movieTrailer(media?.title || media?.name || media?.original_title || '')
			.then((url) => {
				const urlParams = new URLSearchParams(new URL(url).search);
				setTrailerUrl(urlParams.get('v'));
			})
			.catch((error) => console.log('No Video Available'));

		if (modalIsOpen) {
			setModalIsOpen(false);
			setTimeout(() => {
				setVideoModalIsOpen(true);
				setMediaVideoDetails(media);
			}, '600');
		} else {
			setVideoModalIsOpen(true);
			setMediaVideoDetails(media);
		}
	};

	// prevent background scroll when modal or video modal open
	const body = document.querySelector('body');
	const html = document.querySelector('html');
	body.style.overflow = videoModalIsOpen || modalIsOpen ? 'hidden' : 'auto';
	html.style.overflow = videoModalIsOpen || modalIsOpen ? 'hidden' : 'auto';

	return (
		<Context.Provider
			value={{
				watchListItems,
				addToWatchList,
				removeFromWatchList,

				modalIsOpen,
				mediaDetails,
				closeModal,
				handleDetails,

				returnToModal,
				openedFromModal,
				setOpenedFromModal,

				videoModalIsOpen,
				mediaVideoDetails,
				trailerUrl,
				closeVideoModal,
				handleVideoDetails,
			}}
		>
			{children}
		</Context.Provider>
	);
};

