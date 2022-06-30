import { genresData } from '../config/genres';
import PropTypes from 'prop-types';
/**
 *@function GenresList
 * @param {array} genreIds: id Nos of categories/genres for film/series
 * @returns {JSX} unordered list of genres Names (duplicates removed)
 */
const GenresList = ({ genreIds }) => {
	let list = [];
	genreIds.forEach((id) => {
		genresData.map((genre) => genre.id === id && list.push(genre.name));
	});

	const cleanList = [...new Set(list)];

	return (
		<ul className="listGroup">
			{cleanList.map(name => 
				<li className="listGroup__item" key={name}>
					{name}
				</li>
			)}
		</ul>
	);
};

export default GenresList;

// Prototypes
GenresList.propTypes = {
  genreIds: PropTypes.array,
}