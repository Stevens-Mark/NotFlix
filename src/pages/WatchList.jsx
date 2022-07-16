import { useEffect, useContext } from 'react';
import { Context } from '../context/globalProvider';
import MediaCard from '../components/MediaCard';
import useModal from '../utils/useModal';
import Modal from '../components/Modal';
/**
 * Renders WatchList page
 * @function WatchList
 * @returns {JSX}
 */
const WatchList = () => {
	const { modalIsOpen, mediaDetails, closeModal, handleDetails } = useModal();
	const { watchListItems } = useContext(Context);

	useEffect(() => {
		document.title = 'NotFlix | Watch List';
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="media">
			<h1 className="sr-only">Welcome to NotFlix - My Watch List</h1>
			{watchListItems.length <1 ? (
				<div className="media__status">
					<span>Your Watch List is currently empty ...</span></div>
			) : (
				<div className="media__grid">
					{watchListItems.map((data) => (
						<MediaCard
							key={data.id}
							media={data}
							handleDetails={handleDetails}
						/>
					))}
				</div>
			)}

			{modalIsOpen && <Modal closeModal={closeModal} medai={mediaDetails} />}
		</main>
	);
};

export default WatchList;

