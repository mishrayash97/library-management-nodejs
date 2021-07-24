import {v4 as uuidv4} from 'uuid';

export var books=[];

export const addBook =(req,res)=>{
    const book=req.body;
    //PUSH THE BOOK WITH id TO THE DB
    books.push({...book,id:uuidv4()});
    res.send(`Book with name : ${book.title} added to the database`);
};

export const getAllBooks=(req,res)=>{
    res.send(books);
};

export const getBookById= (req,res)=>{
    const {id}=(req.params);
    const foundBook= books.find((book)=>book.id==id);
    res.send(foundBook);
};

export const deleteBook=(req,res)=>{
    const {id}=(req.params);
    
    books=books.filter((book)=>book.id!== id);
    res.send(`User with id: ${id} deleted from the database`);
    //res.send("A delete req");
};

export const updateBook=(req,res)=>{
    const { id }=req.params;
    const { title,author,genre}=req.body;
    var bookToBeUpdated=books.find((book)=>book.id==id);
    if(title) bookToBeUpdated.title=title;
    if(author) bookToBeUpdated.author=author;
    if(genre) bookToBeUpdated.genre=genre;

    res.send(`The updated book with id: ${id} is updated`);
};