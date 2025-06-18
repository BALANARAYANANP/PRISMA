import express from 'express'
import { CreateNewSubjects, getAllSubjects } from '../Controllers/SubjectControllers'
// import { CreateNewSubjects } from '../Controllers/SubjectControllers'

export const SubjectRoute = express.Router()

SubjectRoute.post('/post', CreateNewSubjects)
SubjectRoute.get('/get',getAllSubjects)