import express from 'express';
import bodyParser from 'body-parser';

//named booksroutes as all routes will start with books
import booksRoutes from './routes/books.js';


//the application
const app=express();
const PORT=8080;

app.use(bodyParser.json());

//middleware
app.use('/books',booksRoutes);

app.get('/',(req,res)=>{res.send("Hello and welcome to library management system!");});


app.listen(PORT,()=>console.log(`server Running on port : http://localhost:${PORT}`));