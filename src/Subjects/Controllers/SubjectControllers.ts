import { Request, Response } from "express";
import { prisma } from "../../Prisma";
import { Subjectdto } from "../dto/subjectdto";
import SubjectServices from "../Services/SubjectServices";

export const CreateNewSubjects = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: Subjectdto = req.body;

    const newSubject = await SubjectServices.Subjectcreation(data);
    res.status(200).send(newSubject);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};

export const getAllSubjects = async (req: Request, res: Response) => {
  try {
    const AllSubjects = await SubjectServices.getAllSubjects();
    if (AllSubjects) res.status(200).json(AllSubjects);
    else {
      res.status(404).send("No User Found");
    }
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
