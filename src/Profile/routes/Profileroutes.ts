import express from 'express'
import { CreateProfile, GetAllProfile } from '../Controllers/ProfileController'

export const Profilerouter = express.Router()


Profilerouter.post('/post', CreateProfile)
Profilerouter.get('/get',GetAllProfile)