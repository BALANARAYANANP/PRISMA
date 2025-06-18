import { prisma } from "../../Prisma";
import { Subjectdto } from "../dto/subjectdto";

export default class SubjectServices {
  static async Subjectcreation(data: Subjectdto) {
    try {
      const subjects = await Promise.all(
        data.name.map(async (subjectName: string) => {
          const newSubject = await prisma.subject.create({
            data: {
              name: subjectName,
              Tutor: data.Tutor,
              student: {
                connect: {
                  id: data.stud_id,
                },
              },
            },
          });

          await prisma.many.create({
            data: {
              stud_id: data.stud_id,
              sub_id: newSubject.id,
            },
          });

          return newSubject;
        })
      );
      return subjects;
    } catch (err) {
      console.error(err);
      throw new Error("Failed to create subjects and many records");
    }
  }
  static async getAllSubjects() {
    try {
      const AllSubjects = await prisma.subject.findMany({
        include: { student: true },
      });
      return AllSubjects;
    } catch (err) {
      throw new Error();
    }
  }
}
