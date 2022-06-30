import { genresData } from '../config/genres';

const GenresList = ({ genreIds }) => {
	let list = [];
	for (let i = 0; i < genreIds.length; i++) {
		for (let j = 0; j < genresData.length; j++) {
			if (genresData[j].id === genreIds[i]) {
				list.push(genresData[j].name);
			}
		}
	}

	const cleanList = [...new Set(list)];

	return (
		<ul>
			{cleanList.map((genre, idx) => (
				<li key={idx}>{genre}</li>
			))}
		</ul>
	);
};

export default GenresList;
