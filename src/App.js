import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';
// 84333f22

function App() {


  
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const  API_URL = 'http://www.omdbapi.com?apikey=84333f22';

  const searchMovies = async (searchTerm) => {
  const response = await fetch(`${API_URL}&s=${searchTerm}`)
  const data = await response.json();
 
  setMovies(data.Search);

  console.log(movies)

}

console.log(movies)


  useEffect(() => {
    searchMovies("");
  }, [])







  return (
    <div className="app">
        <h1>MovieLand</h1>
        <div className='search'>
          <input placeholder='Search for movies' value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value)}}></input>
          <img src={SearchIcon} onClick={() => {searchMovies(searchTerm)}}></img>
        </div>

        {/* {movies.map((movie) => 
          (<div>{movie.Title}</div>)
        )}
         */}

        {
          movies?.length > 0 
          ? (
            <div className='container'>

              {movies.map((movie) => 
              <MovieCard movie={movie}/>
              )}
            </div>
          ) : (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
        }

        {/* {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )} */}
        
   
    </div>
  );
}

export default App;
