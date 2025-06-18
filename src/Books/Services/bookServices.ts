import { prisma } from "../../Prisma";
import StudentServices from "../../Student/Services/userService";
import { BookRequest } from "../dto/Bookdto";

export default class BookServices {
  static async NewBookCreation(data: BookRequest) {
    try {
    //   const isValidUserId = await StudentServices.getOneUser(id: data.id)
    //   if(!isValidUserId)
        // throw new Error()
      const new_book = await prisma.books.create({
        data: {
          name: data.name,
          Book_code: data.Book_code,
          content_type: data.content_type,

          student: {
            connect: {
              id: data.userId,
            },
          },
        },
      });
      return new_book;
    } catch (err: any) {
      throw new Error();
    }
  }
  static async GetAllBooks() {
    try {
      const Allbooks = await prisma.books.findMany({
        include: { student: true },
      });
      return Allbooks;
    } catch (err) {
      throw new Error();
    }
  }
}
