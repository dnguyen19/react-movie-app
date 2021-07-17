import {STORAGE_FAVOURITE_MOVIES} from '../globals/variables';

export const isItemInStorage = (newItem) => {
    let yourCurrentMovies = getStorage();
    if(!yourCurrentMovies){
        return [];
    }
    if(yourCurrentMovies.find(currentMovie => currentMovie.id === newItem.id)){
        return true;
    }
    return yourCurrentMovies;
}

export const setStorage = (newFavMovie, storageItem = STORAGE_FAVOURITE_MOVIES) => {
    if (storageItem === STORAGE_FAVOURITE_MOVIES){
        let arrayOfFavMovies;
        arrayOfFavMovies = getStorage();
        arrayOfFavMovies.push(newFavMovie);
        localStorage.setItem(storageItem, JSON.stringify(arrayOfFavMovies));
    }
}

export const getStorage = (storageItem = STORAGE_FAVOURITE_MOVIES) => {
    let item = localStorage.getItem(storageItem);
    if(item){
        item = JSON.parse(item);
        return item;
    }else if(storageItem === STORAGE_FAVOURITE_MOVIES){
        return [];
    }else{
        return false;
    } 
}


export const removeFromStorage = (id, storageItem = STORAGE_FAVOURITE_MOVIES) => {
    let items = getStorage();
    const isMovie = (current) => current.id === id;

    let index = items.findIndex(isMovie);
    items.splice(index, 1);
    let itemsForStorage = JSON.stringify(items);
    localStorage.setItem(storageItem, itemsForStorage);
    return items
}
