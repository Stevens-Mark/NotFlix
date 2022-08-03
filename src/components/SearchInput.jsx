import { useState, useContext, } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../context/globalProvider';
import { SEARCH_URL } from '../config/requests';
// import components
import Animate from '../utils/Animate';
// import icons
import xMark from '../assets/icons/xmark.svg';
import magnify from '../assets/icons/magnify.svg';

/**
 * Renders search input field
 * @function SearchInput
 * @returns {JSX} input search field
 */
const SearchInput = () => {
	const [input, setInput] = useState('');
	const [showInput, setShowInput] = useState(false);
	let history = useHistory();
	const { fetchData, setData, data } = useContext(Context);

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
	 * Change to search page (& put query in parameter "queryValue")
	 * @function handleSubmit
	 */
	const handleSubmit = (event) => {
		event.preventDefault();
		if (input.length > 0) {
			history.push(`/search?queryValue=${input}`);
			// setInput('');
			setData([]);
			console.log(data)
			fetchData(`${SEARCH_URL}${input}&page=1`);
		}
	};

	/**
	 * Change to home page / reset search query value
	 * @function handleReset
	 */
	const handleReset = () => {
		setInput('');
		setData([]);
		// history.push('/');
	};

	return (
		<div className="searchInput">
			<div className="searchInput__container">
				<Animate show={showInput} animateIn={'slideIn'} animateOut={'slideOut'}>
					<form onSubmit={handleSubmit}>
						<label className="sr-only" htmlFor="search">
							Search
						</label>
						<input
							type="text"
							id="search"
							value={input}
							placeholder="Search Tv & Movies ..."
							// required={true}
							maxLength={30}
							onChange={(e) => handleText(e)}
						/>
					</form>
					<button
						className="searchInput__clearBtn"
						aria-label="Reset search"
						onClick={() => handleReset()}
					>
						<img className="searchInput__icon" src={xMark} alt="Reset search" />
					</button>
				</Animate>
			</div>
			<button
				className="searchInput__magnify"
				aria-label="Open or close search input"
				onClick={() => setShowInput((prevShowInput) => !prevShowInput)}
			>
				<img src={magnify} alt="magnify glass" />
			</button>
		</div>
	);
};

export default SearchInput;

