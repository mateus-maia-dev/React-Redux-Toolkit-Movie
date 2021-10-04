import React from 'react';
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice"
import Slider from "react-slick";
import { Settings } from '../../common/settings.carousel';
import MovieCard from '../MovieCard/MovieCard'

import "./MovieListing.scss"

const MovieListing = () => {

    const movies = useSelector(getAllMovies)
    const series = useSelector(getAllSeries)
    let renderMovies, renderSeries = "";

    renderMovies = movies.Response ? (
        movies.Search.map((movie, index) => (
            < MovieCard key={index} data={movie} />
        ))
    ) : (
        <div className="movies-error">
            <h3>{movies.Error}</h3>
        </div>
    );

    console.log(series)
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2 >Movies</h2>
                <div>
                    <Slider {...Settings}>{renderMovies}</Slider>
                </div>
            </div>
            <div className="serie-list">
                <h2 >Series</h2>
                {series.Response === "True" ?

                    <Slider {...Settings}>{series.Search.map((serie, index) => (
                        < MovieCard key={index} data={serie} />
                    ))}</Slider>
                    :
                    <h3 className="nthg-to-show">Nothing to show</h3>
                }
            </div>

        </div>
    );
};

export default MovieListing;