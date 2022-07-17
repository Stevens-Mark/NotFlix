import { useEffect } from 'react';
import MediaCard from '../components/MediaCard';
import useModal from '../utils/useModal';
import Modal from '../components/Modal';
/**
 * Renders Search page
 * @function Search
 * @returns {JSX}
 */
const Search = () => {
	const { modalIsOpen, mediaDetails, closeModal, handleDetails } = useModal();

  const searchResults = [];
	useEffect(() => {
		document.title = 'NotFlix | Search';
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="media">
			<h1 className="sr-only">Welcome to NotFlix - Media Search</h1>
			{searchResults.length < 1 ? (
				<div className="media__status">
					<span>There are no results ...</span>
				</div>
			) : (
				<div className="media__grid">
					{searchResults.map((data) => (
						<MediaCard
							key={data.id}
							media={data}
							handleDetails={handleDetails}
						/>
					))}
				</div>
			)}

			{modalIsOpen && <Modal closeModal={closeModal} media={mediaDetails} />}
		</main>
	);
};

export default Search;
