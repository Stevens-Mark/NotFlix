import React, {useState, useEffect} from "react";
import { createContext } from 'react';

export const Context = createContext();

export const ContextProvider = ({children})  => {
    // const [allPhotos, setAllPhotos] = useState([])
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
    
    // const url = "https://..............."
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setAllPhotos(data))
    // }, [])
    
    // function toggleFavorite(id) {
    //     const updatedArr = allPhotos.map(photo => {
    //         if(photo.id === id) {
    //             return {...photo, isFavorite: !photo.isFavorite}
    //         }
    //         return photo
    //     })
        
    //     setAllPhotos(updatedArr)
    // }
    
    const addToWatchList =(newItem) => {
        setwatchListItems(prevItems => [...prevItems, newItem]);
    }
    
    const removeFromWatchList = (id) => {
        setwatchListItems(prevItems => prevItems.filter(item => item.id !== id));
    }
    
    return (
        <Context.Provider value={{
					// allPhotos, 
					// toggleFavorite,
					watchListItems, 
					addToWatchList, 
					removeFromWatchList}}>
            {children}
        </Context.Provider>
    )
}
