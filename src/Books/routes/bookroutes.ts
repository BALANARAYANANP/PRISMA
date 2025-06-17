import  express  from "express";
import {CreateNewBook, GetAllBooks} from '../Controllers/bookControllers'


export const bookroute = express.Router()

bookroute.post('/post',  CreateNewBook)
bookroute.get('/get', GetAllBooks)