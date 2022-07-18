import React, {useState, useEffect} from "react";
import { createContext } from 'react';

export const Context = createContext();

export const ContextProvider = ({children})  => {

    const [watchListItems, setwatchListItems] = useState([]);
     
    // Local Storage: setting & getting data
    useEffect(() => {
        const watchListItemData = JSON.parse(localStorage.getItem('watchListItem'));
        
        if (watchListItemData) {
            setwatchListItems(watchListItemData);
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('watchListItem', JSON.stringify(watchListItems));
    }, [watchListItems]);
      
    const addToWatchList =(newItem) => {
        setwatchListItems(prevItems => [...prevItems, newItem]);
    }
    
    const removeFromWatchList = (id) => {
        setwatchListItems(prevItems => prevItems.filter(item => item.id !== id));
    }
    
    return (
        <Context.Provider value={{
					watchListItems, 
					addToWatchList, 
					removeFromWatchList}}>
            {children}
        </Context.Provider>
    )
}
