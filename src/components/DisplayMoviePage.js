import React, { Component } from 'react';
import {API_URL_REQUEST_IMG} from '../globals/variables';
import {getStorage} from '../utilities/StorageMaker';
import star from '../images/star.png';
import notfav from '../images/notfav.png';
import fav from '../images/fav.png';
import {setStorage, removeFromStorage} from  '../utilities/StorageMaker';
import imgPlaceholder from '../images/clapperboard.png';

class DisplayMoviePage extends Component {

    constructor() {
        super();
        this.state = {
          updateFavBtn: false
        };
    }

    handleAdd = (e, data) =>{
        e.preventDefault();
        setStorage(data);
        this.setState({
            updateFavBtn: true
        })
    }

    handleRemove = (e, id) => {
        e.preventDefault();
        removeFromStorage(id);
        this.setState({
            updateFavBtn: false
        })
    }

    favButton = (id, movieData) => {
        let arrStorage =  getStorage();
        let result = <button className="fav-btn" onClick={(e) => this.handleAdd(e, movieData)}><img src={notfav}></img> Add to Favourites</button> ;

        arrStorage.map((storageItem, index) =>{
            let storageItemId = storageItem.id;
            if(storageItemId === id){
                result = <button className="fav-btn" onClick={(e) => this.handleRemove(e, id)}><img src={fav}></img> Remove from Favourites</button> 
            }
        })
        return result;
    }

    getCast = (creditsData) => {
        let cast = [];
        creditsData.cast.map((item, index) => {
            cast.push(item.name);
        })
        if (cast.length > 20){
            cast = cast.splice(0, 20);
        }
        
        return cast.join(", ");

    }

    getProducers = (creditsData) => {
        let producerList = [];
        creditsData.crew.map((item, index) => {
            if (item.job === "Producer"){
                producerList.push(item.name);
            }
        })
        let producers =  producerList.join(", ");
        return producers;
    }

    getDirectors = (creditsData) =>{
        let directorList = [];
        creditsData.crew.map((item, index) => {
            if (item.job === "Director"){
                directorList.push(item.name);
            }
        })
        if(directorList.length > 1){
            let directors = directorList.join(", ");
            return directors;
        } else {
            return directorList;
        }
    }

    displayMovie = (movieData) => {
        let genreList = [];
        movieData.genres.map((item, i) => genreList.push(item.name));
        let genres = genreList.join(" | ");

        return(
            <div className="movie-page">
                <div className="movie-img">
                {movieData.poster_path === null ? <div className="movie-poster-placeholder"><img src={imgPlaceholder} alt="Movie poster placeholder"></img></div> :
                <div>
                    <img className="movie-img-mobile" src={`${API_URL_REQUEST_IMG}${movieData.backdrop_path}`} alt="Movie backdrop image"></img>
                    <div className="movie-img-desktop" style={{backgroundImage: `url(${API_URL_REQUEST_IMG}${movieData.poster_path})`}}></div>
                </div>
                    }
                </div>
                
                <div className="movie-page-desc-container">
                    <section className="movie-page-header">
                        <article className="movie-page-title">
                            <h1 className="movie-page-title">{movieData.original_title}</h1>
                            <p>{genres}</p>
                        </article>
                        
                        <article className="movie-page-ratings">
                            <img src={star} alt="Star icon"></img>
                            <p>{movieData.vote_average}</p>
                        </article>
                    </section>

                    {this.state.updateFavBtn ?  
                    this.favButton(movieData.id, movieData):
                    this.favButton(movieData.id, movieData) }

                    <section className="movie-page-desc">
                        <p className="movie-page-date">Release date: {movieData.release_date}</p>
                        <h3>Synopsis</h3>
                        <p className="movie-page-about">{movieData.overview}</p>
                    </section>

                    <section className="movie-crew movie-cast">
                        <h3>Cast</h3>
                        <p>{this.getCast(this.props.credits)}</p>
                    </section>

                    <section className="movie-crew movie-producers">
                        <h3>Producers</h3>
                        <p>{this.getProducers(this.props.credits)}</p>
                    </section>
                    
                    <section className="movie-crew movie-directors">
                        <h3>Directors</h3>
                        <p>{this.getDirectors(this.props.credits)}</p>
                    </section>
                    
                </div>
                
            </div>
        )
}

    render(){
        return (
            <div className="diplay-movie-page">
                {this.displayMovie(this.props.movie)}
            </div>
        );
    }
}

export default DisplayMoviePage;



