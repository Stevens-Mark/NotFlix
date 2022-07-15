import { useEffect, useContext } from 'react';
import { Context } from '../context/globalProvider';
import MediaCard from '../components/MediaCard';
import useModal from '../utils/useModal';
import Modal from '../components/modal';
/**
 * Renders WatchList page
 * @function WatchList
 * @returns {JSX}
 */
const WatchList = () => {
	const { modalIsOpen, movieDetails, closeModal, handleDetails } = useModal();
	const { watchListItems } = useContext(Context);

	useEffect(() => {
		document.title = 'NotFlix | Watch List';
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className='media__container'>
			<h1 className="sr-only">Welcome to NotFlix - My Watch List</h1>
			<div className="media__grid">
				{watchListItems.map((data) => (
					<div className="row__movie" key={data.id}>
						<MediaCard movie={data} handleDetails={handleDetails} />
					</div>
				))}
			</div>
			{modalIsOpen && <Modal closeModal={closeModal} movie={movieDetails} />}
		</main>
	);
};

export default WatchList;

