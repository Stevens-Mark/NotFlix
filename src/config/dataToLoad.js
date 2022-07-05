import { requests, requestsTv } from './requests';

export const homeData = [
	{ url: requests.fetchTrending, category: 'Trending' },
	{ url: requests.fetchFakeflixOriginals, category: 'NotFlix Originals' },
	{ url: requests.fetchTopRated, category: 'Top Rated' },

	// { url: requests.fetchAnimation, category: 'Animation' },
	// { url: requests.fetchComedy, category: 'Comedy' },
	// { url: requests.fetchCrime, category: 'Crime' },
	// { url: requests.fetchDocumentaries, category: 'Documentaries' },
	// { url: requests.fetchDrama, category: 'Drama' },
];

export const movies = [
	{ url: requests.fetchTrending, category: 'Trending' },
	{ url: requests.fetchTopRated, category: 'Top Rated Movies' },
	// { url: requests.fetchFakeflixOriginals, category: 'NotFlix Originals' },
	// { url: requests.fetchAnimation, category: 'Animation' },
	{ url: requests.fetchActionMovies, category: 'Action' },
	{ url: requests.fetchAdventureMovies, category: 'Adventure' },
	{ url: requests.fetchFamilyMovies, category: 'Family' },
	{ url: requests.fetchFantasyMovies, category: 'Fantasy' },
	{ url: requests.fetchHistoryMovies, category: 'History' },
	{ url: requests.fetchHorrorMovies, category: 'Horror' },
	{ url: requests.fetchRomanceMovies, category: 'Romance' },
	{ url: requests.fetchScienceFictionMovies, category: 'Science Fiction' },
	{ url: requests.fetchThrillerMovies, category: 'Thriller' },
	{ url: requests.fetchWarMovies, category: 'War' },
	// { url: requests.fetchComedy, category: 'Comedy' },
	// { url: requests.fetchCrime, category: 'Crime' },
	// { url: requests.fetchDocumentaries, category: 'Documentaries' },
	// { url: requests.fetchDrama, category: 'Drama' },
];

export const tvShows = [
	{ url: requestsTv.fetchTvTrending, category: 'Trending' },
	{ url: requestsTv.fetchFakeflixOriginals, category: 'NotFlix Originals' },
	{ url: requestsTv.fetchTvTopRated, category: 'Top Rated' },
	{ url: requestsTv.fetchActionAdventureTv, category: 'Action & Adventure' },
	{ url: requestsTv.fetchFamilyTv, category: 'Family' },
	{ url: requestsTv.fetchKidsTv, category: 'Kids' },
	{ url: requestsTv.fetchNewsTv, category: 'News' },
	{ url: requestsTv.fetchSciFiTv, category: 'Science Fiction' },
	// { url: requests.fetchAnimation, category: 'Animation' },
	// { url: requests.fetchComedy, category: 'Comedy' },
	// { url: requests.fetchCrime, category: 'Crime' },
	// { url: requests.fetchDocumentaries, category: 'Documentaries' },
	// { url: requests.fetchDrama, category: 'Drama' },
];

export const newAndPopular = [
	{ url: requests.fetchTrending, category: 'Trending' },
	{ url: requests.fetchMoviePopular, category: 'Popular Movies' },
	{ url: requests.fetchMoviesLastest, category: 'Latest Movies' },
	{ url: requests.fetchMoviesTopRated, category: 'Top Rated Movies' },
	{ url: requestsTv.fetchTvPopular, category: 'Popular Tv' },
	{ url: requestsTv.fetchTvLastest, category: 'Latest Tv' },
	{ url: requestsTv.fetchTvTopRated, category: 'Top Rated Tv' },
	{ url: requests.fetchMoviesUpcoming, category: 'Upcoming' },
];

