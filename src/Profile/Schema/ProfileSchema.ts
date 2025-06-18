import {z} from 'zod'


export const ProfileSchema = z.object({
    bio: z.string({invalid_type_error :"bio only accept string"}),
    user_id : z.number({required_error: "userId cannot Be null", invalid_type_error: "Only Accept String"})

})