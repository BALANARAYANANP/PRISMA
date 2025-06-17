import { Request, Response } from "express";
import { prisma } from "../../Prisma";
import { Subjectdto } from "../dto/subjectdto";

export const CreateNewSubjects = async (req: Request, res: Response):Promise<void>  =>  {
  try {
    const data: Subjectdto = req.body;

    if (!data || !data.name || !data.Tutor || !data.stud_id) {
      res.status(400).send("Missing subject data or student IDs");
      return 
    }

    const subject = await prisma.subject.create({
      data: {
        name: data.name,
        Tutor: data.Tutor,
        student: {
          connect :{
            id : data.stud_id
          }
        },
      },
    
    });
const many1 = await prisma.many.create(
  {data:{stud_id:subject.stud_id,
    sub_id:subject.id
  }
  }
)
    res.status(200).send(subject);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
