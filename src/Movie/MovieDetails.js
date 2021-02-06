import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './MovieDetails.css'

const DETAILS_URL = 'https://api.themoviedb.org/3/movie/';
const API = '?api_key='

const _PATH = 'https://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'original';
const POSTER_SIZE = 'w342';

function MovieDetails() {

    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const getDetails = async () => {
        const res = await fetch(DETAILS_URL + id + API + process.env.REACT_APP_MOVIE_API);
        const details = await res.json();
        // console.log(details);
        setMovie(details)
    }

    useEffect(() => {
        getDetails();
    }, [id])


    if (!movie.title) return null;

    return (
        <div className='movie-details'>
            <div className='backdrop-image'>
                <img src={_PATH + BACKDROP_SIZE + movie.backdrop_path} />
            </div>
            <div className='detail-container'>
                <div className='detail-poster'>
                    <img src={_PATH + POSTER_SIZE + movie.poster_path} />
                </div>
                <div className='detail-details'>
                    <h1>{movie.title}</h1>
                    <p>{movie.overview}</p>
                    <ul>
                        {movie.genres.map((genre) => {
                            return <li key={genre.id}>{genre.name}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
