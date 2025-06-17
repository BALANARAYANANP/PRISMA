import express from 'express'
import { CreateUser, deleteUserById, GetAllUsers, OneStudent, UpdateStudent } from '../controllers/userController'

export const router = express.Router()

router.post('/post', CreateUser)
router.get('/get',GetAllUsers)
router.get("/one/:id",OneStudent)
router.put('/put/:id',UpdateStudent)
router.delete('/delete/:id', deleteUserById)