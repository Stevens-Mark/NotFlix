import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
// import items needed for data fetch
// import movieTrailer from 'movie-trailer';
import axios from '../config/requests';
import { API_KEY } from '../config/requests';

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

	// HANDLE VIDEO MODAL SECTION
	// **************************
	const [videoModalIsOpen, setVideoModalIsOpen] = useState(false);
	const [mediaVideoDetails, setMediaVideoDetails] = useState('');
	const [trailerUrl, setTrailerUrl] = useState('');

	const closeVideoModal = () => {
		setVideoModalIsOpen(false);
		// setTrailerUrl('');
	};

	const handleVideoDetails = async (media) => {
		if (trailerUrl) {
			setTrailerUrl('');
		}
		const url =
			media?.first_air_date || media?.media_type === 'tv'
				? `/tv/${media.id}/videos?api_key=${API_KEY}&language=en-US`
				: `/movie/${media.id}/videos?api_key=${API_KEY}&language=en-US`;

		try {
			const request = await axios.get(url);
			const videoTrailer = request.data.results.find(
				(item) => item.type === 'Clip' || item.type === 'Trailer'
			);
			setTrailerUrl(videoTrailer?.key);
		} catch (err) {
			console.log(err);
			console.log('No Video Available');
		}

		// VIDEO TRAILER SEARCH USING NPM PACKAGE: HAS PROBLEMS FINDING TV SHOWS SO I WROTE
		// MY OWN SEARCH (SEE ABOVE): I have left this code for anyone interested in this approach.
		// **************************************************************************************
		// movieTrailer(media?.title || media?.name || media?.original_title || media?.original_name || '')
		// 	.then((url) => {
		// 		const urlParams = new URLSearchParams(new URL(url).search);
		// 		setTrailerUrl(urlParams.get('v'));
		// 	})
		// 	.catch((error) => console.log('No Video Available'));

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

	// loading / error / totalPages status
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [totalPages, setTotalPages] = useState(0);

	// SEARCH PAGE SECTION
	// *********************
	// to show additional SEARCH results on SEARCH page when user clicks more button
	const [data, setData] = useState([]);
	const [value, setValue] = useState(undefined);
	const [page, setPage] = useState(2);

	const fetchData = async (fetchUrl) => {
		const query = new URLSearchParams(fetchUrl).get('query');
		setIsLoading(true);
		try {
			const request = await axios.get(fetchUrl);
			setTotalPages(request.data.total_pages);
			const media_type = ['person']; // filter out people from results
			const filtered = request.data.results.filter(
				(i) => !media_type.includes(i.media_type)
			);
			if (query === value) {
				// stop duplicates in case user enters same search word again
				const key = 'id';
				setData([
					...new Map(
						[...data, ...filtered].map((item) => [item[key], item])
					).values(),
				]);
			} else {
				setData(filtered);
				setValue(query);
			}
		} catch (err) {
			setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	// MORE GENRE ITEMS PAGE SECTION
	// *******************************
	// to show additional media items on GENRE page when user clicks more button
	const [showData, setShowData] = useState([]);

	const showMore = async (fetchUrl) => {
		setIsLoading(true);
		try {
			const request = await axios.get(fetchUrl);
			const additionalData = request.data.results;
			setShowData([...showData, ...additionalData]);
		} catch (err) {
			setIsError(true);
		} finally {
			setIsLoading(false);
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

				isLoading,
				isError,

				data,
				setData,
				fetchData,

				showData,
				setShowData,
				showMore,

				page,
				setPage,
				setTotalPages,
				totalPages,
			}}
		>
			{children}
		</Context.Provider>
	);
};

