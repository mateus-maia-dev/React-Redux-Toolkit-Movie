import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing"
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Home.scss"

const Home = () => {
    const dispatch = useDispatch();

    const movie = "Avengers";
    const serie = "Game";
    useEffect(() => {
        dispatch(fetchAsyncMovies(movie))
        dispatch(fetchAsyncShows(serie))
    }, [dispatch])

    return (
        <>
            <Header />
            <div className="banner-img">
                <MovieListing />
            </div>
            <Footer />
        </>
    );
};

export default Home;