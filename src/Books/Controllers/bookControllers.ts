import  { Request, Response } from "express";
import { BookRequest } from "../dto/Bookdto";
import { prisma } from "../../Prisma";
import BookServices from "../Services/bookServices";

export const CreateNewBook = async (req: Request, res: Response) => {
  try {
    const data: BookRequest = req.body;
    if (data) {
      const book = await BookServices.NewBookCreation(data);
      res.status(200).send(book)
    } else {
      res.status(404).send("Input Is Required");
    }
  } catch (err:any) {
    res.status(400).send(err.message);
  }
  
};


export const GetAllBooks = async(req:Request, res:Response) =>{
    try{
        const books = await BookServices.GetAllBooks()
    
        if(books){
            res.status(200).send(books)
        }
        else{
            res.status(404).send("No Books Found")
        }
    }catch(err:any){
        res.status(400).send(err.message)
    }
}
