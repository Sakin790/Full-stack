import express from "express"
const app = express()
const PORT = 8080
 const jokes = [
  {
    id: 1,
    title :"This a First Jokes",
    content : "This is a Jokes"
  }
 ]

app.get('/', (req,res) => {
  res.send('Home Page')  
})



app.get('/api/jokes', (req,res) => {
    
    res.send(jokes)
})

app.listen(PORT, () => {
    console.log(`Server is Running at Port : ${PORT}`);
    
})