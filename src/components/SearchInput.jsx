import { useState } from 'react';
import { useHistory } from "react-router-dom";


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
    // if (input.length > 0) {
    //   history.push('/search');
    // } else {
    //   history.push('/');
    // }
	};

	/**
	 * @function handleSubmit
	 */
	const handleSubmit = (event) => {
		event.preventDefault();
    if (input.length > 0) {
      history.push(`/search?queryValue=${input}`);
    } 
    // else {
    //   history.push('/');
    // }
    console.log(input);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label className="sr-only" htmlFor="search">Search</label>
			<input
				type="text"
				id="search"
				value={input}
        placeholder="Search..."
				required={true}
				maxLength={30}
				onChange={(e) => handleText(e)}
			/>

			{/* <button type="submit">S</button> */}
		</form>
	);
};

export default SearchInput;
