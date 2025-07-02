import express from 'express'
const router = express.Router()
import {addUser, deleteUser, getAllUsers, getUserById, updateUser} from '../controllers/userController.js'
import validateUser from '../middleware/validator.js';

// MongoDB routes
// get user route
router.get("/users", getAllUsers);

// get user by id route
router.get("/users/:id", getUserById);

// post user route with middleware
router.post("/user", validateUser, addUser);

// update user route with middleware
router.put("/user/:id", validateUser, updateUser);

// delete user route
router.delete("/user/:id", deleteUser);


export default router;



