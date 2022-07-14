import React, {useState, useEffect} from "react";
import { createContext } from 'react';

export const Context = createContext();

export const ContextProvider = ({children})  => {
    // const [allPhotos, setAllPhotos] = useState([])
    const [watchListItem, setwatchListItem] = useState([])
     
    // Local Storage: setting & getting data
    useEffect(() => {
        const watchListItemData = JSON.parse(localStorage.getItem('watchListItem'))
        
        if (watchListItemData) {
            setwatchListItem(watchListItemData)
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('watchListItem', JSON.stringify(watchListItem))
    }, [watchListItem])
    
    // const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
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
    
    function addToWatchList(newItem) {
        setwatchListItem(prevItems => [...prevItems, newItem])
    }
    
    function removeFromWatchList(id) {
        setwatchListItem(prevItems => prevItems.filter(item => item.id !== id))
    }
    
    return (
        <Context.Provider value={{
					// allPhotos, 
					// toggleFavorite,
					watchListItem, 
					addToWatchList, 
					removeFromWatchList}}>
            {children}
        </Context.Provider>
    )
}
