import React, { useState, useEffect } from 'react';
import { API_URL_REQUEST_SEARCH, API_URL_REQUEST_GENRE} from '../globals/variables';
import DisplayMovieGrid from './DisplayMovieGrid';
import SearchBar from './SearchBar';

const Search = (props) => {
    const query = props.match.params.query;
    const language = '&language=en-US&query=';

    const [searchData, setSearchData] = useState(null);
    const [genreData, setGenreData] = useState(null);

    useEffect(() => {
        
        const fetchSearchResults = async () => {
            const res = await fetch(`${API_URL_REQUEST_SEARCH}${language}${query}&page=1`);
            const data = await res.json();
            setSearchData(data.results);
            console.log(data.results);
        }
        const fetchGenre = async () => {
            const res = await fetch(`${API_URL_REQUEST_GENRE}`);
            const data = await res.json();
            const genreData = data;
            setGenreData(genreData.genres);
        }

        fetchGenre();
        fetchSearchResults();

    }, [query]);

    return (
        <div>
            <div className="sub-menu">
                <SearchBar />
                <h3>Search results for '{query}'</h3>
            </div>
            {searchData && searchData.length === 0 ? <p>Sorry, no results found.</p> :
            <div className="movie-grid-container">
                {(searchData && genreData) && <DisplayMovieGrid movie={searchData} genre={genreData}/>} 
    </div> }
        </div>
    );
}

export default Search;
