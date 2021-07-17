import React, { useState, useEffect } from 'react';
import {API_KEY, API_URL_REQUEST_MOVIE, LANGUAGE, DEFAULT_SORT_BY, API_URL_REQUEST_GENRE} from '../globals/variables';
import DisplayMovieGrid from './DisplayMovieGrid';
import SearchBar from './SearchBar';
import SelectSortBy from './SelectSortBy';

const Home = (props) => {

    const initalSortBy = props.sort;
    const [sort, setSort] = useState(initalSortBy);
    const [movieData, setMovieData] = useState(null);
    const [genreData, setGenreData] = useState(null);

    useEffect(() => {
        
        const fetchMovies = async () =>{
            const res = await fetch(`${API_URL_REQUEST_MOVIE}${sort}${API_KEY}${LANGUAGE}`);
            const data = await res.json();
            const movieData = data;
            setMovieData(movieData.results);
        }
        
        const fetchGenre = async () => {
            const res = await fetch(`${API_URL_REQUEST_GENRE}`);
            const data = await res.json();
            const genreData = data;
            setGenreData(genreData.genres);
        }

        fetchMovies();
        fetchGenre();
    }, [sort]);

    const handleSortChange = (sortby) => {
        setSort(sortby);
    }

        return (
            <div>
                <div className="sub-menu">
                <SearchBar />
                <SelectSortBy sortby={props.sort} handleSortChange={handleSortChange}/>
                </div>
                {(movieData && genreData) && <DisplayMovieGrid movie={movieData} genre={genreData}/>}
            </div>
        );
    };

Home.defaultProps = {
    sort: DEFAULT_SORT_BY
}
export default Home;

