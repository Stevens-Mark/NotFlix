import React, { useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';

export const Store = createContext();

const storage = [
	{
		movies: [],
	},
	{
		tvShows: [],
	},
	{
		popular: [],
	},
];

export const StoreProvider = ({ children }) => {
	
	const [data, setData] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const fetchData = async (fetchUrl) => {
		setLoading(true);
		try {
			const request = await axios.get(fetchUrl);
			setData(request.data.results);
		} catch (err) {
			console.log(err);
			setIsError(true);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Store.Provider value={{ storage, fetchData, data, isLoading, isError }}>
			{children}
		</Store.Provider>
	);
};
