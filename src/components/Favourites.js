import React, { Component } from 'react';
import {getStorage} from '../utilities/StorageMaker';
import {API_URL_REQUEST_IMG} from '../globals/variables';
import { Link } from 'react-router-dom';
import star from '../images/star.png';
import imgPlaceholder from '../images/clapperboard.png';


class Favourites extends Component {

    displayFav = (arrStorage) => {
        return arrStorage.map((item, i) =>{
            let genreList = [];
            item.genres.map((genre, i) => genreList.push(genre.name));
            let genres = genreList.join(" | ");
            let id = item.id;

            return (
                <div key={i} className="movie-grid-item">

                <div className="movie-item">
                    <div className="movie-poster">
                        {item.poster_path === null ? <div className="movie-poster-placeholder"><img src={imgPlaceholder} alt="Movie poster placeholder"></img></div> :
                        <img className="movie-poster" src={`${API_URL_REQUEST_IMG}${item.poster_path}`} alt="Movie poster"></img>}

                        <div className="hover-movie-desc">
                            <div className="movie-desc-header">
                                <p>{item.release_date}</p>
                                <div className="movie-ratings">
                                    <img src={star} alt="Star icon"></img>
                                    <p>{item.vote_average}</p>
                                </div> 
                            </div>
                            <p className="movie-desc-about">{item.overview}</p>
                            <Link className="info-btn" to={{ pathname: `/movie_${id}`, movieId:id}}>More Info</Link>
                        </div>

                    </div>
                    <p className="movie-title">{item.original_title}</p>
                    <p className="movie-genre">{genres}</p>
                </div>
            </div>
            )
            
        })
    }
    render() {
        let favMovies = getStorage();
        console.log(favMovies);

        return (
            <div>
                {favMovies.length === 0 ?
                <p>Sorry you have no favourited movies. Return to the home page to add a
                favourite movie</p> : 
                <div>
                    <h2>Your Favourites</h2>
                    
                    <div className="movie-grid-container">
                        <div className="display-movie-grid">
                            {this.displayFav(favMovies)}
                        </div>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default Favourites;
