import { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import icons
import xMark from '../assets/icons/xmark.svg';
// import magnify from '../assets/icons/magnify.svg';

/**
 * Renders search input field
 * @function SearchInput
 * @returns {JSX} input search field
 */
const SearchInput = () => {
	const [input, setInput] = useState('');
	let history = useHistory();

	/**
	 * Restricts what the user can enter in the TEXT input fields & saves to state
	 * @function handleText
	 * @param {object} the targeted input
	 */
	const handleText = (e) => {
		setInput(
			// permits alphanumeric
			e.target.value.replace(/[^0-9a-zA-ZÀ-ÿ-.\s]/g, '').trimStart()
		);
	};

	/**
	 * Change to search page (query in parameters)
	 * @function handleSubmit
	 */
	const handleSubmit = (event) => {
		event.preventDefault();
		if (input.length > 0) {
			history.push(`/search?queryValue=${input}`);
		} 
	};

		/**
	 * Change to home page / reset search query value
	 * @function handleReset
	 */
	const handleReset = () => {
		setInput('');
		history.push('/');
	};

	return (
		<div className="searchInput">
				<button className="searchInput__clearBtn" aria-label="Reset search" onClick={() => handleReset()}>
				<img className="searchInput__icon" src={xMark} alt="Reset search" />
			</button>

		<form onSubmit={handleSubmit}>
			<label className="sr-only" htmlFor="search">
				Search
			</label>
			<input
				type="text"
				id="search"
				value={input}
				placeholder="Search Tv & Movies ..."
				required={true}
				maxLength={30}
				onChange={(e) => handleText(e)}
			/>
			</form>
					{/* <button type="submit">
				<img className="form__icons" src={magnify} alt="Search" />
			</button> */}
		</div>
	);
};

export default SearchInput;

