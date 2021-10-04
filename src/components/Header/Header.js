import React, { useState } from 'react';
import user from "../images/user.png"
import { useDispatch } from "react-redux"
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

import "./Header.scss"

const Header = () => {
    const [target, setTarget] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (ev) => {
        ev.preventDefault();
        if (target === "") return alert("Please enter a movie or serie.")

        dispatch(fetchAsyncMovies(target));
        dispatch(fetchAsyncShows(target));
    }

    return (
        <div className="header">
            <div className="logo">Movie App</div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" value={target} onChange={(ev) => setTarget(ev.target.value)} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user" />
            </div>
        </div>
    );
};

export default Header;