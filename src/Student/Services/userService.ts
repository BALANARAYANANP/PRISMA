import { Prisma } from "../../../generated/prisma";
import { prisma } from "../../Prisma";
import { OneUser, Studentdto } from "../dto/student";

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
        skip: 0,
        take: 1,
        include: { profile: true, Books: true, Subject: true },
      });
      return users;
    } catch (err) {
      throw Error;
    }
  }

  static async getOneUser(id: OneUser) {
    try {
      const user = await prisma.student.findUnique({
        where: { id: id.id },
        include: {
          profile: true,
          Books: true,
          Subject: true,
        },
      });
      return user;
    } catch (err) {
      throw new Error();
    }
  }

  static async UpdateStudent(id: OneUser, data: Studentdto) {
    try {
      const UpdatedStudent = await prisma.student.update({
        data: {
          email: data.email,
          name: data.name,
          age: data.age,
          lname: data.lname,
          isAlive: data.isAlive,
        },
        where: { id: id.id },
      });
      return UpdatedStudent;
    } catch (err) {
      throw new Error();
    }
  }
  static async DeleteStudent(id: OneUser) {
    try {
      const deleteStudent = await prisma.student.delete({
        where: { id: id.id },
      });
      return deleteStudent;
    } catch (err) {
      throw new Error();
    }
  }
}
