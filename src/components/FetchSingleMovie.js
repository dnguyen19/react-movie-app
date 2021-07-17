import React, { useState, useEffect } from 'react';
import {API_KEY, API_URL_REQUEST_MOVIE, LANGUAGE} from '../globals/variables';
import DisplayMoviePage from './DisplayMoviePage';

// pass in id
const FetchSingleMovie = (props) => {
    const id = props.match.params.movieId;
    const [singleMovieData, setSingleMovieData] = useState(null);
    const [creditsData, setCreditsData] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const movieId = id;
            const res = await fetch(`${API_URL_REQUEST_MOVIE}${movieId}${API_KEY}${LANGUAGE}`);
            const data = await res.json();
            setSingleMovieData(data);
        }

        const fetchMovieCredits = async () => {
            const movieId = id;
            const res = await fetch(`${API_URL_REQUEST_MOVIE}${movieId}/credits${API_KEY}`);
            const data = await res.json();
            setCreditsData(data);
        }
        fetchMovieCredits();
        fetchMovie();
    }, [id]);
    
    return (
        <div >
            {(singleMovieData && creditsData) && <DisplayMoviePage movie={singleMovieData} credits={creditsData}/>}
        </div>
    );
}

export default FetchSingleMovie;

