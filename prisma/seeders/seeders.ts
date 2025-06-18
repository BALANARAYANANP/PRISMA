import { PrismaClient } from "../../generated/prisma";




const prisma = new PrismaClient()

async function main() {
    const student = await prisma.student.create({
        data :{
            email : "seeder@gmail.com",
            name: "seed",
            age: 98,
            lname: "test",
            isAlive : true
            
        }
    }) 
    const student2 = await prisma.student.create({
        data :{
            email : "seeders@gmail.com",
            name: "seeds",
            age: 98,
            lname: "tesst",
            isAlive : true
            
        }
    }) 

    const profile = await prisma.profile.create({
        data :{
            bio : "QA",
            userId : 13
           
        }
    }) 
}

main()
    .then(()=>{
        console.log("Data Seeded")
        return prisma.$disconnect()
    })
    .catch((e)=>{
        console.log("seed failed" , e)
        return prisma.$disconnect().finally(()=> process.exit(1))
    })