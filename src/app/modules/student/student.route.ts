import express from "express";
import { studentControllers } from "./student.controler";
const router = express.Router();

router.post("/create-student", studentControllers.createStudent);

router.get("/allstudent", studentControllers.getAllStudents);

router.get("/:id", studentControllers.getSingleStudent);

router.delete("/:id", studentControllers.deleteStudent);

router.put("/:id", studentControllers.updateStudent)

export const studentRoutes = router;
