import express from "express"
const app = express()
const PORT = 8080

app.get('/', (req,res) => {
  res.send('Home Page')  
})

app.get('/jokes', (req,res) => {
    
    res.send('Welcome to joks page')
})

app.listen(PORT, () => {
    console.log(`Server is Running at Port : ${PORT}`);
    
})