
import { useState } from 'react';
import './App.css';
import AddNewMovie from './components/AddNewMovie';
import MovieList from './components/MovieList';
import SearchBare from './components/SearchBare';
import { moviesData } from './data';

function App() {
  const  [movies, setMovies] = useState(moviesData);
  const [text,setText] = useState("");
  const [rating, setRating] = useState("");
  const handelDelete=(id)=>{
setMovies(movies.filter(movie=>movie.id!==id))
  }


 const handelChange=(y)=>{
setText(y)
  }

const  handelRatnig=(z)=>{
  setRating(z)
}

const handelAdd=(newmovie)=>{
  setMovies([...movies,newmovie])
}

  // console.log(movies);
  return (
    <div className="App">
      <SearchBare text={text} rating={rating}   handelChange={handelChange}  handelRatnig={handelRatnig}/>
      <MovieList  data={movies.filter(el=>el.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())&&el.rating>=rating)} deleteMovie={handelDelete } />
      <AddNewMovie  handelAdd={handelAdd}/>
    </div>
  );
}

export default App;
