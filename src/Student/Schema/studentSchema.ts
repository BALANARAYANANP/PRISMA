import {z}  from 'zod'

export const StudentSchema = z.object({
    email: z.string().min(6),
    name: z.string({required_error: "Name was Required"}),
    lname: z.string({required_error :" Lastname is Required"}),
    isAlive : z.boolean().default(true),
    age: z.number({invalid_type_error: "Age only Accept Number type"})


})

