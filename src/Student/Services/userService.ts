import { Prisma } from "../../../generated/prisma";
import { prisma } from "../../Prisma";
import { OneUser } from "../dto/student";

export default class StudentServices {
  static async createUser(Studentdata: Prisma.StudentCreateInput) {
    try {
      const users = await prisma.student.create({ data: Studentdata });
      return users;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  static async getAllStudents() {
    try {
      const users = await prisma.student.findMany({
        include: { profile: true , Books : true , Subject: true},
      });
      return users;
    } catch (err) {
      throw Error;
    }
  }

  static async getOneUser( id : OneUser) {
    try {
      const user = await prisma.student.findUnique({ where:  id  });
      return user;
    } catch (err) {
      throw new Error();
    }
  }
}
