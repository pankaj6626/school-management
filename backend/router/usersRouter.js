import express from "express";
import { studentSignIn, teacherSignIn, adminSignIn } from "../controllers/usersController.js";

const router = express.Router();

router.post('/student/signin', studentSignIn);
router.post('/teacher/signin', teacherSignIn);
router.post('/admin/register', adminSignIn);

export default router;
 
