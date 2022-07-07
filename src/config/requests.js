export const API_KEY =  '';

export const BASE_URL = 'https://api.themoviedb.org/3';
// for fetching real image data
// export const IMAGE_URL = 'https://image.tmdb.org/t/p/original/';
// for fetching mocked image
export const IMAGE_URL = '../mockImages';

export const requests = {
	// fetchMoviesNowPLaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
	fetchMoviePopular: `/movie/popular?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
	fetchMoviesLastest: `/movie/latest?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
	fetchMoviesTrending: `/trending/movie/day?api_key=${API_KEY}&sort_by=popularity.desc`,
	fetchMoviesUpcoming: `/upcoming?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
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
	fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402&sort_by=popularity.desc`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&sort_by=popularity.desc`,
	fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878&sort_by=popularity.desc`,
	fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53&sort_by=popularity.desc`,
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752&sort_by=popularity.desc`,
};

export const requestsTv = {
	fetchActionAdventureTv: `/discover/tv?api_key=${API_KEY}&with_genres=10759&sort_by=popularity.desc`,
	fetchFamilyTv: `/discover/tv?api_key=${API_KEY}&with_genres=10751&sort_by=popularity.desc`,
	fetchKidsTv: `/discover/tv?api_key=${API_KEY}&with_genres=10762&sort_by=popularity.desc`,
	fetchNewsTv: `/discover/tv?api_key=${API_KEY}&with_genres=10763&sort_by=popularity.desc`,
	fetchSciFiTv: `/discover/tv?api_key=${API_KEY}&with_genres=10765&sort_by=popularity.desc`,

	// fetchTvOnAir: `/tv/on_the_air?api_key=${API_KEY}>&language=en-US&page=1`,
	fetchTvLastest: `/tv/latest?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`,
	fetchTvPopular: `/popular?api_key=${API_KEY}&language=en-US&page=1`,
	fetchTvTopRated: `/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
	fetchTvTrending: `/trending/tv/day?api_key=${API_KEY}&sort_by=popularity.desc`,
};

export const requestsVideo = {
	fetchMovieVideo: `/movie/{movie_id}/videos?api_key=${API_KEY}&language=en-US`,
	fetchTvVideo: `/tv/{tv_id}/videos?api_key=${API_KEY}&language=en-US`,
};
