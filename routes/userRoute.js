import express from 'express'
const router = express.Router()
import { addUser, deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/userController.js';
import validateUser from '../middleware/validator.js'

// route for fetch user
router.get("/users", getAllUsers);

// route for fecth user by id
router.get("/users/:id", getUserById);

// route for create new user
router.post("/user", validateUser, addUser);

// route for update user by id
router.put("/user/:id", validateUser, updateUser);

// route for delete user by id
router.delete("/user/:id", deleteUser);


export default router;



