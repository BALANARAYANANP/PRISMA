import { prisma } from "../../Prisma";
import { OneUser } from "../../Student/dto/student";
import { Profiledto } from "../dto/profileInterface";

export default class ProfileServices {
  static async createProfile(profileInput: Profiledto) {
    try {
      const newprofile = await prisma.profile.create({
        data: {
          bio: profileInput.bio,
          userId: profileInput.user_id,
        },
      });
      return newprofile;
    } catch (err) {
      throw new Error();
    }
  }

  static async GetAllProfile(){
    try{
        const AllProfiles = await prisma.profile.findMany({include: { user: true },})
        return AllProfiles
    }catch(err){
      throw new Error()
    }
  }
}
