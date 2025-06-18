import express from 'express'
import { CreateStudent, deleteStudent, getAllStudents,  OneStudent, UpdateStudent } from '../controllers/userController'
import { Validate } from '../middlewares/ValidadateUser'
import { StudentSchema } from '../Schema/studentSchema'

export const router = express.Router()

router.post('/post', Validate(StudentSchema, "body"),  CreateStudent)
router.get('/get',getAllStudents)
router.get("/one/:id",OneStudent)
router.put('/put/:id',UpdateStudent)
router.delete('/delete/:id', deleteStudent)