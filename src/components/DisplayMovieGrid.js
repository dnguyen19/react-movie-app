import React, { Component } from 'react';
import {API_URL_REQUEST_IMG} from '../globals/variables';
import { Link } from 'react-router-dom';
import star from '../images/star.png';
import imgPlaceholder from '../images/clapperboard.png';

class DisplayMovieGrid extends Component {

    getGenre = (genreId, genreArr) => {
        var genreList = [];
        genreArr.map((genre, index) => {
        for (let i = 0; i < genreId.length; i++) {
            const id = genreId[i];
                if(id === genre.id){
                    genreList.push(genre.name);
                }
            }
        })
    let genre = genreList.join(" | ");
    return(genre);
    }

    displayMovie = (movieArr, genreArr) => {
    return movieArr.map((item, i) => {
        const genreId = item.genre_ids;
        let id = item.id;
        let genreResults = this.getGenre(genreId, genreArr);

        
        return(
            <div key={i} className="movie-grid-item">

                <div className="movie-item">
                    <div className="movie-poster">
                        {item.poster_path === null ? <div className="movie-poster-placeholder"><img src={imgPlaceholder} alt="Movie poster placeholder"></img></div> :
                        <img className="movie-poster" src={`${API_URL_REQUEST_IMG}${item.poster_path}`} alt="Movie poster"></img>}

                        <section className="hover-movie-desc">
                            <article className="movie-desc-header">
                                <p>{item.release_date}</p>
                                <div className="movie-ratings">
                                    <img src={star} alt="Star icon"></img>
                                    <p>{item.vote_average}</p>
                                </div> 
                            </article>
                            <p className="movie-desc-about">{item.overview}</p>
                            <Link className="info-btn" to={{ pathname: `/movie_${id}`, movieId:id}}>More Info</Link>
                        </section>

                    </div>
                    <Link className="movie-title" to={{ pathname: `/movie_${id}`, movieId:id}}>{item.original_title}</Link>
                    <p className="movie-genre">{genreResults}</p>
                </div>
            </div>
        )
    })
}

    render(){
        return (
            <div className="movie-grid-container">
                <div className="display-movie-grid">
                    {this.displayMovie(this.props.movie, this.props.genre)}
                </div>
            </div>
        );
    }
}

export default DisplayMovieGrid;


