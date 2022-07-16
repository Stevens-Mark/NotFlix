import { requests } from './requests';

export const homeList = [
	{ url: requests.fetchTrending, category: 'Trending' },
	{ url: requests.fetchFakeflixOriginals, category: 'NotFlix Originals' },

	{ url: requests.fetchActionMovies, category: 'Action' },
	{ url: requests.fetchAdventureMovies, category: 'Adventure' },
	{ url: requests.fetchAnimation, category: 'Animation' },
	{ url: requests.fetchComedy, category: 'Comedy' },
	{ url: requests.fetchCrime, category: 'Crime' },
	{ url: requests.fetchDocumentaries, category: 'Documentaries' },
	{ url: requests.fetchDrama, category: 'Drama' },
	{ url: requests.fetchFantasyMovies, category: 'Fantasy' },
	{ url: requests.fetchScienceFictionMovies, category: 'Science Fiction' },
	{ url: requests.fetchThrillerMovies, category: 'Thriller' },
	{ url: requests.fetchWarMovies, category: 'War' },
];

export const moviesList = [
	{ url: requests.fetchTrending, category: 'Trending' },
	{ url: requests.fetchFakeflixOriginals, category: 'NotFlix Originals' },
	{ url: requests.fetchMoviesTopRated, category: 'Top Rated Movies' },

	{ url: requests.fetchActionMovies, category: 'Action' },
	{ url: requests.fetchAdventureMovies, category: 'Adventure' },
	{ url: requests.fetchFamilyMovies, category: 'Family' },
	{ url: requests.fetchFantasyMovies, category: 'Fantasy' },
	// { url: requests.fetchHistoryMovies, category: 'History' },
	{ url: requests.fetchHorrorMovies, category: 'Horror' },
	// { url: requests.fetchRomanceMovies, category: 'Romance' },
	{ url: requests.fetchScienceFictionMovies, category: 'Science Fiction' },
	{ url: requests.fetchThrillerMovies, category: 'Thriller' },
	{ url: requests.fetchWarMovies, category: 'War' },

	// { url: requests.fetchAnimation, category: 'Animation' },
	// { url: requests.fetchComedy, category: 'Comedy' },
	// { url: requests.fetchCrime, category: 'Crime' },
	// { url: requests.fetchDocumentaries, category: 'Documentaries' },
	// { url: requests.fetchDrama, category: 'Drama' },
];

export const tvShowsList = [
	{ url: requests.fetchTvTrending, category: 'Trending' },
	{ url: requests.fetchFakeflixOriginals, category: 'NotFlix Originals' },
	{ url: requests.fetchTvTopRated, category: 'Top Rated' },

	{ url: requests.fetchActionAdventureTv, category: 'Action & Adventure' },
	{ url: requests.fetchFamilyTv, category: 'Family' },
	{ url: requests.fetchKidsTv, category: 'Kids' },
	{ url: requests.fetchNewsTv, category: 'News' },

	{ url: requests.fetchSciFiTv, category: 'Science Fiction' },
	// { url: requests.fetchAnimation, category: 'Animation' },
	// { url: requests.fetchComedy, category: 'Comedy' },
	// { url: requests.fetchCrime, category: 'Crime' },
	// { url: requests.fetchDocumentaries, category: 'Documentaries' },
	// { url: requests.fetchDrama, category: 'Drama' },
];

export const newAndPopularList = [
	{ url: requests.fetchTrending, category: 'Trending' },
	{ url: requests.fetchMoviesPopular, category: 'Popular Movies' },
	{ url: requests.fetchMoviesTopRated, category: 'Top Rated Movies' },
	{ url: requests.fetchTvPopular, category: 'Popular Tv' },
	{ url: requests.fetchTvTopRated, category: 'Top Rated Tv' },
	{ url: requests.fetchMoviesUpcoming, category: 'Upcoming' },
];

