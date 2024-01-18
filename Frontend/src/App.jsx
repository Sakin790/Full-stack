import { useState ,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJoks] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8080/jokes')
    .then((response) => {
      setJoks(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  console.log(setJoks);
  
  return (
    <div>
      <h1>Api Handle</h1>
      <p>JOKS : {jokes.length}</p>
      {jokes.map((joke, index) => {
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h2>{joke.content}</h2>
        </div>
      })}
    </div>
  )
}

export default App
