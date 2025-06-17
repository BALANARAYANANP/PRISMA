import { Request, Response } from "express";
import { prisma } from "../../Prisma";
import { OneUser, Studentdto } from "../dto/student";
import { Prisma } from "../../../generated/prisma";
import StudentServices from "../Services/userService";

export const CreateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data: Prisma.StudentCreateInput = req.body;

    const users = await StudentServices.createUser(data);
    console.log(users);
    res.status(200).json({ message: "User created", users });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const GetAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await StudentServices.getAllStudents();
    res.status(200).send(users);
  } catch (err: any) {
    res.status(400).json({ "Error Meaasge ": err.message });
  }
};

export const OneStudent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    if (!req.params.id) {
      res.status(404).send("User Not Found");
    } else {
      const user = await StudentServices.getOneUser({id});
      res.status(200).json({ messsage: user });
    }
  } catch (err: any) {
    res.status(500).json({ Error: err.message });
  }
};

export const UpdateStudent = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const data: Prisma.StudentUpdateInput = req.body;
    const student = await prisma.student.update({
      data: data,
      where: {
        id: id,
      },
    });
    res.status(200).json({ "User Updated": student });
  } catch (err) {
    res.status(401).json({ message: "User Could Updated" });
  }
};

export const deleteUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id);
    if (id) {
      const users = await prisma.student.delete({ where: { id: id } });
      res.status(200).send("User Deleted");
    } else {
      res.status(404).json({ message: "User Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
};
