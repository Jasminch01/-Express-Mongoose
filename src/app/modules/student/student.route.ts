import express from "express";
import { studentControllers } from "./student.controler";
const router = express.Router();

router.post("/create-student", studentControllers.createStudent);

router.get("/allstudent", studentControllers.getAllStudents);

router.get("/:id", studentControllers.getSingleStudent);

export const studentRoutes = router;
