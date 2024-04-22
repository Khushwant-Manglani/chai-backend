import { useState, useEffect } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((err) => {
        console.log("Error", err.message);
      })
  })

  return (
    <>
      <h1>Jokes: {jokes.length}</h1>
      {jokes.map((joke, index) => {
        return <div key={joke.id} className='joke__box' >
          <h2>title: {joke.title}</h2>
          <p>description: {joke.content}</p>
        </div>
      })}
    </>
  )
}

export default App
