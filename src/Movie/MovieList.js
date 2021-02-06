import React, { useState, useEffect } from 'react'
import Input from '../Input';
import Movie from './Movie';
import './MovieList.css'

const API_URL = 'https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=';


function MovieList() {

    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState('');

    const getMovies = async () => {
        // console.log(process.env)
        const res = await fetch(API_URL + process.env.REACT_APP_MOVIE_API)
        const movieJSON = await res.json();
        // console.log(movieJSON.results);
        setMovies(movieJSON.results);
    }


    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div className='movie-list'>
            <Input filter={filter} setFilter={setFilter} />
            <ul>
                {movies.filter((movie) => movie.title.toLowerCase().includes(filter.toLowerCase())).map((movie) =>
                    <Movie key={movie.id} movie={movie} />
                )}
            </ul>
        </div>
    )
}

export default MovieList
