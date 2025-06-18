import { Request, Response } from "express";
import { Prisma } from "../../../generated/prisma";
import { prisma } from "../../Prisma";
import { Profiledto } from "../dto/profileInterface";
import ProfileServices from "../Services/profileServices";

export const CreateProfile = async (req: Request, res: Response) => {
  try {
    const data: Profiledto = req.body;
    if (data) {
      const profile = await ProfileServices.createProfile(data);
      res.status(200).json({ "Profile Created Sucessfully": profile });
    } else {
      res.status(404).json({ Error: "No Input Given" });
    }
  } catch (err: any) {
    res.status(400).json({ Error: err.message });
  }
};

export const GetAllProfile = async (req: Request, res: Response) => {
  try {
    const profile = await ProfileServices.GetAllProfile();

    if (profile) {
      res.status(200).send(profile);
    } else {
      res.status(404).send("No profiles Found");
    }
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
