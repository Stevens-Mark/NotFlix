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
		}, '650'); // used for delay between video modal closing and modal opening
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
			}, '650'); // used for delay between closing modal and opening video modal
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

	// SEARCH PAGE SECTION
	// *********************
	// to show additional results on pagewhen user clicks more button
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [value, setValue] = useState(undefined);

	const fetchData = async (fetchUrl) => {
		const query = new URLSearchParams(fetchUrl).get('query');
		const url = `https://api.themoviedb.org/3${fetchUrl}`;
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const responseData = await response.json();
			const media_type = ['person']; // filter out people from results
			const filtered = responseData.results.filter(
				(i) => !media_type.includes(i.media_type)
			);
			if (query !== value) {
				setData(filtered);
				setValue(query);
			} else {
				// stop duplicates in case user enters same search word again
				const key = 'id';
				setData([
					...new Map(
						[...data, ...filtered].map((item) => [item[key], item])
					).values(),
				]);
			}
		} catch (err) {
			console.log(err);
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	const [showData, setShowData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const showMore = async (fetchUrl) => {
		const url = `https://api.themoviedb.org/3${fetchUrl}`;
		setLoading(true);
		console.log(url);
		try {
			const response = await fetch(url);
			const responseData = await response.json();
			const media_type = ['person']; // filter out people from results
			const filtered = responseData.results.filter(
				(i) => !media_type.includes(i.media_type)
			);

			setShowData([...showData, ...filtered]);
		} catch (err) {
			console.log(err);
			setError(true);
		} finally {
			setLoading(false);
		}
	};

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

				data,
				setData,
				isLoading,
				isError,
				fetchData,

				showData,
				showMore,
				setShowData,
				loading,
				error
			}}
		>
			{children}
		</Context.Provider>
	);
};

