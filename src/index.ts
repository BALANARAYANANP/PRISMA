import express from "express";
import { PrismaClient } from "../generated/prisma";
import { router } from "./Student/routes/userRoutes";

const prisma = new PrismaClient();

const app = express();
app.use(express.json())
app.use('/api',router)




const getUsers = async()=>{
    const users  = await prisma.student.findMany({
        orderBy:{
            name: 'asc'
        }
    })
    console.log(users)
}


const pagination = async ()=> {
    const students = await prisma.student.findMany({
        skip: 0,
        take: 1
    


})
console.log(students)}


const createProfile = async ()=>{
    const profile = await  prisma.profile.createMany({
        data:[{bio: "Tester", userId: 26},
            {bio: "Hr", userId:28}
        ]
    })
    console.log(profile)
}

const getUsress =async ()=>{
    const users = await prisma.student.findMany({
       
        include:{profile: true}
    })
    console.log(users)
}





  // await getUsress();
  app.listen(3000, () => {
    console.log("Server is Running On Port 3000");
  });
