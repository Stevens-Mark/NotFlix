import { genresData } from '../config/genres';

/**
 *
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
			{cleanList.map((name, idx) => (
				<li className={`listGroup__item listGroup__item--${idx+1}`} key={name}>{name}</li>
			))}
		</ul>

	);
};

export default GenresList;
