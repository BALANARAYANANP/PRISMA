import express from 'express'
import { CreateProfile, GetAllProfile } from '../Controllers/ProfileController'
import { Validate } from '../middlewares/validateProfile'
import { ProfileSchema } from '../Schema/ProfileSchema'

export const Profilerouter = express.Router()


Profilerouter.post('/post',Validate(ProfileSchema, "body"), CreateProfile)
Profilerouter.get('/get',GetAllProfile)