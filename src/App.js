import { useEffect, useState } from "react";

import './App.css';
import searchIcon from './search.svg';

import MovieCard from "./MovieCard";
//2aefdf6b

const API_URL = 'http://www.omdbapi.com?apikey=2aefdf6b';


const App = ()=>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // console.log(data.Search);
        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('Your Name');
    },[]);//this [] is used if you want this hook to fire only at the start of the app





    return (
        <div className="app">
            <h1>PK Movies</h1>
            <div className="search">
                <input type="text" placeholder="search for movies" value={searchTerm} onChange={(term)=> setSearchTerm(term.target.value)}/>
                <img src={searchIcon} alt="search" onClick={()=> searchMovies(searchTerm)}/>
            </div>
            {
                movies.length>0
                ? (
                    <div className="container">
                        {
                            movies.map((movie)=>(<MovieCard movie1 ={movie}/>))
                        }
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found!</h2>
                    </div>
                )
            }
            
        </div>
    )
};

export default App;