/**
 * Takes an array & randomly chooses an element from the array
 * @function randomSelect
 * @param {array} data 
 * @returns an element from the array
 */
export const  randomSelect = ( data ) => {
  const idx = Math.floor((Math.random() * data.length) + 0);
  return data[ idx ];
}

/**
 * @function truncateString
 * @param {string} str: string to truncate
 * @param {number} num: number to trncate at
 * @returns {string} truncated text to number (num) of places
 */
export const truncateString  = (str, num) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}