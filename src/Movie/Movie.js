import React from 'react';
import './Movie.css'
import { Link } from 'react-router-dom'

const POSTER_PATH = 'https://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w342';


function Movie({ movie }) {
    return (
        <div className='movie'>
            <Link to={`/find/${movie.id}`}>
                <img src={POSTER_PATH + POSTER_SIZE + movie.poster_path} />
            </Link>
            <li>{movie.title}</li>
        </div>
    )
}

export default Movie
