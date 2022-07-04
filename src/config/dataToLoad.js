import { requests, requestsTv } from './requests';

export const dataToLoad = [
	{
		url: requests.fetchTrending,
		category: 'Trending',
	},
	{
		url: requests.fetchFakeflixOriginals,
		category: 'NotFlix Originals',
	},
	{
		url: requests.fetchTopRated,
		category: 'Top Rated',
	},
	// {
	// 	url: requests.fetchAnimation,
	// 	category: 'Animation',
	// },
	// {
	// 	url: requests.fetchComedy,
	// 	category: 'Comedy',
	// },
	// {
	// 	url: requests.fetchCrime,
	// 	category: 'Crime',
	// },
	// {
	// 	url: requests.fetchDocumentaries,
	// 	category: 'Documentaries',
	// },
	// {
	// 	url: requests.fetchDrama,
	// 	category: 'Drama',
	// },
];

export const movies = [
	{
		url: requests.fetchTrending,
		category: 'Trending',
	},
	{
		url: requests.fetchMoviesTopRated,
		category: 'Top Rated Movies',
	},
]


export const tvShows = [
	{ url: requestsTv.fetchTvTrending, category: 'Trending' },
	{ url: requests.fetchFakeflixOriginals, category: 'NotFlix Originals' },
	{ url: requests.fetchTopRated, category: 'Top Rated' },
	// { url: requests.fetchAnimation, category: 'Animation' },
	// { url: requests.fetchComedy, category: 'Comedy' },
	// { url: requests.fetchCrime, category: 'Crime' },
	// { url: requests.fetchDocumentaries, category: 'Documentaries' },
	// { url: requests.fetchDrama, category: 'Drama' },
	{ url: requests.fetchActionAdventureTv, category: 'Action & Adventure' },
	{ url: requests.fetchFamilyTv, category: 'Family' },
	{ url: requests.fetchKidsTv, category: 'Kids' },
	{ url: requests.fetchNewsTv, category: 'News' },
	{ url: requests.fetchSciFiTv, category: 'Science Fiction' },
];

export const newAndPopular = [
	{ url: requests.fetchTrending, category: 'Trending' },
	{ url: requests.fetchMoviePopular, category: 'Popular Movies' },
	{ url: requests.fetchMoviesLatest, category: 'Latest Movies' },
	{ url: requests.fetchMoviesTopRated, category: 'Top Rated Movies' },
	{ url: requests.fetchTvPopular, category: 'Popular Tv' },
	{ url: requests.fetchTvLastest, category: 'Latest Tv' },
	{ url: requests.fetchTvTopRated, category: 'Top Rated Tv' },
	{ url: requests.fetchMoviesUpcoming, category: 'Upcoming' },
];

