/**
 * Takes an array & randomly chooses an element from the array
 * @function randomSelect
 * @param {array} data
 * @returns an element from the array
 */
export const randomSelect = (data) => {
	const idx = Math.floor(Math.random() * data.length + 0);
	return data[idx];
};

/**
 * @function truncateString
 * @param {string} str: string to truncate
 * @param {number} num: number to trncate at
 * @returns {string} truncated text to number (num) of places
 */
export const truncateString = (str, num) => {
	if (str.length <= num) {
		return str;
	}
	return str.slice(0, num) + '...';
};

/*Formats a date correctly from yyyy-mm-dd to dd/mm/yyyy
 * @function convertDate
 * @returns {string} formatted date
 */
export const ConvertDate = (input) => {
	const [year, month, day] = input.split('-');
	return `${day}/${month}/${year}`;
};

/**
 * Capitalizes the first letter of each word of a given string
 * @function capitalize
 * @param {string} unformatted string
 * @returns {string} capitalised string
 */
export const capitalize = (string) => {
	// return string && string[0].toUpperCase() + string.slice(1)
	return string
		.toLowerCase()
		.split(' ')
		.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
		.join(' ');
};

/**
 * @function getYear
 * @returns {string} current year
 */
export const getYear = () => {
	return new Date().getFullYear();
};

