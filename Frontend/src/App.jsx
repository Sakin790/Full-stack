import { useState ,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJoks] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
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
    {jokes.map((joke) => (  // Change the variable name to avoid conflict
      <div key={joke.id}>
        <h3>Title is {joke.title}</h3>
        <h2>Content {joke.content}</h2>
      </div>
    ))}
  </div>
  
    
  )
}

export default App
