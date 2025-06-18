import express from "express";
import { PrismaClient } from "../generated/prisma";
import { router } from "./Student/routes/userRoutes";
import { Profilerouter } from "./Profile/routes/Profileroutes";
import { bookroute } from "./Books/routes/bookroutes";
import { SubjectRoute } from "./Subjects/routes/subjectroutes";

const prisma = new PrismaClient();

const app = express();
app.use(express.json())
app.use("/api", router);
app.use('/profile', Profilerouter)
app.use('/book', bookroute)
app.use('/subject', SubjectRoute)



const pagination = async () => {
  const students = await prisma.student.findMany({
    skip: 0,
    take: 1,
  });
  console.log(students);
};



app.listen(3000, () => {
  console.log("Server is Running On Port 3000");
});
