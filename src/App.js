import { useState } from "react";
import "./App.css";
import { Card } from "./components/card/Card";
import { Header } from "./components/header/Header";

const movies = [];

function App() {
  const [newMovie, setNewMovie] = useState(movies);
  function addNewMovie(data) {
    const arr = [...newMovie, data];
    setNewMovie(arr);
  }

  function deleteExpenses(title) {
    const newMovies = newMovie.filter((el) => el.title !== title);
    setNewMovie(newMovies);
  }
  return (
    <div className="App">
      <Header onSubmit={addNewMovie} />
      <Card onDelete={deleteExpenses} movie={newMovie} />
    </div>
  );
}

export default App;
