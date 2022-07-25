import axios from 'axios';

export const API_KEY = "3cfc9afc82df69e9aa9eab1c9fa4fae8"; // please use your own api key from TMDB
export const BASE_URL = 'https://api.themoviedb.org/3';
export const SEARCH_URL = `/search/multi?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=`;
export const IMAGE_URL = 'https://image.tmdb.org/t/p/original/'; // for fetching real image data

// base URL to make requests (using axios) to the movie database (used for banner image fetch)
const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	// baseURL: '../MockedDataCopy.json',	// used for mocking data
});
export default instance;

// for fetching mocked image
// export const IMAGE_URL = '../mockImages'; // used for mocking data

export const requests = {
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&sort_by=popularity.desc`,
	fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12&sort_by=popularity.desc`,
	fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16&sort_by=popularity.desc`,
	fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35&sort_by=popularity.desc`,
	fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80&sort_by=popularity.desc`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&sort_by=popularity.desc`,
	fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18&sort_by=popularity.desc`,
	fetchFakeflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123&sort_by=popularity.desc`,
	fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751&sort_by=popularity.desc`,
	fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14&sort_by=popularity.desc`,
	fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36&sort_by=popularity.desc`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&sort_by=popularity.desc`,
	fetchMoviesPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
	fetchMoviesTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
	fetchMoviesTrending: `/trending/movie/day?api_key=${API_KEY}&sort_by=popularity.desc`,
	fetchMoviesUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
	fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402&sort_by=popularity.desc`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc`,
	fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878&sort_by=popularity.desc`,
	fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53&sort_by=popularity.desc`,
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&sort_by=popularity.desc`,

	// Television
	fetchActionAdventureTv: `/discover/tv?api_key=${API_KEY}&with_genres=10759&sort_by=popularity.desc`,
	fetchFamilyTv: `/discover/tv?api_key=${API_KEY}&with_genres=10751&sort_by=popularity.desc`,
	fetchKidsTv: `/discover/tv?api_key=${API_KEY}&with_genres=10762&sort_by=popularity.desc`,
	fetchNewsTv: `/discover/tv?api_key=${API_KEY}&with_genres=10763&sort_by=popularity.desc`,
	fetchSciFiTv: `/discover/tv?api_key=${API_KEY}&with_genres=10765&sort_by=popularity.desc`,
	fetchTvPopular: `/tv/popular?api_key=${API_KEY}&language=en-US`,
	fetchTvTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchTvTrending: `/trending/tv/day?api_key=${API_KEY}&sort_by=popularity.desc`,
};

export const requestsVideo = {
	fetchMovieVideo: `/movie/{movie_id}/videos?api_key=${API_KEY}&language=en-US`,
	fetchTvVideo: `/tv/{tv_id}/videos?api_key=${API_KEY}&language=en-US`,
};

