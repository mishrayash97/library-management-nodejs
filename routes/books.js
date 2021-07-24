import express from 'express';
import { addBook,getBookById,getAllBooks, deleteBook , updateBook} from '../controllers/books.js';


const router=express.Router();



//all routes in here are starting with/books
router.get('/',getAllBooks);

//Adding a book
router.post('/',addBook);

//Get a book by Id
router.get('/:id',getBookById);

//Delete a book
router.delete('/:id',deleteBook);

//Update a book
router.patch('/:id',updateBook);

export default router; 