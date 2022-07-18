import { genresData } from '../config/genres';
import PropTypes from 'prop-types';

/**
 *@function GenresList
 * @param {array} genreIds: id Nos of categories/genres for film/series
 * @param {string} classType : adds a class, to change styling, based on if used in slidder list or modal
 * @returns {JSX} unordered list of genres Names (duplicates removed)
 */
const GenresList = ({ genreIds, classType }) => {
	let list = [];
	genreIds.forEach((id) => {
		genresData.map((genre) => genre.id === id && list.push(genre.name));
	});

	const cleanList = [...new Set(list)];

	return (
		<>
			{cleanList.length < 1 ? (
				<p className="listGroup">None</p>
			) : (
				<ul className="listGroup">
					{cleanList.map((name) => (
						<li
							className={`listGroup__item listGroup__item--${classType}`}
							key={name}
						>
							{name}.
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default GenresList;

// Prototypes
GenresList.propTypes = {
	genreIds: PropTypes.array.isRequired,
	classType: PropTypes.string,
};

