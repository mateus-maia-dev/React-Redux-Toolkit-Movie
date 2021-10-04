import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchAsyncShowsOrMoviesDetails, getMovieOrShow, removeMovieOrShow } from '../../features/movies/movieSlice'
import { useSelector, useDispatch } from 'react-redux';

import ReactLoading from 'react-loading';

import "./MovieDetail.scss"

const MovieDetail = () => {
    const { imdbID } = useParams();
    const data = useSelector(getMovieOrShow);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncShowsOrMoviesDetails(imdbID));

        // para limpar a store desse estado
        return () => {
            dispatch(removeMovieOrShow())
        }
    }, [dispatch, imdbID])



    return (
        <div className="movie-section">
            {Object.keys(data).length === 0 ?
                <div className="loading">
                    <ReactLoading type={"balls"} color={"#ffffff"} height={68} width={68} />
                </div>
                :
                (
                    <>
                        <div className="movie-section__left">
                            <div className="movie-title">
                                {data.Title}
                            </div>
                            <div className="movie-rating">
                                <span>
                                    <i className="icons-rating fa fa-star"></i> IMDB Rating: {data.imdbRating}
                                </span>
                                <span>
                                    <i className="icons-ratingfa fa-thumbs-up"></i> IMDB Votes: {data.imdbVotes}
                                </span>
                                <span>
                                    <i className="icons-rating fa fa-film"></i> Runtime: {data.Runtime}
                                </span>
                                <span>
                                    <i className="icons-rating fa fa-calendar"></i> Year: {data.Year}
                                </span>

                            </div>
                            <div className="movie-plot">
                                {data.Plot}
                            </div>
                            <div className="movie-info">
                                <div>
                                    <span>Genre</span>
                                    <span>{data.Genre}</span>
                                </div>
                                <div>
                                    <span>Director</span>
                                    <span>{data.Director}</span>
                                </div>
                                <div>
                                    <span>Cast</span>
                                    <span>{data.Actors}</span>
                                </div>
                                <div>
                                    <span>Language</span>
                                    <span>{data.Language}</span>
                                </div>
                                <div>
                                    <span>Awards</span>
                                    <span>{data.Awards}</span>
                                </div>
                            </div>

                            <a className="btn-back" href="/"><i class="fas fa-arrow-left"></i>
                                &nbsp;</a>
                        </div>
                        <div className="movie-section__right">
                            <img src={data.Poster} alt={data.Title} />
                        </div>
                    </>
                )
            }



        </div>

    );

};

export default MovieDetail;