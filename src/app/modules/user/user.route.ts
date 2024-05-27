import express from "express";
import { Request, Response, NextFunction } from "express";
import { userController } from "./user.controller";
import { AnyZodObject } from "zod";
import { createStudentValidationSchema } from "../student/student.validation";
import validateRequestedData from "../../utils/validateRequestData";

const router = express.Router();

router.post(
  "/create-student",
  validateRequestedData(createStudentValidationSchema),
  userController.createStudent
);

export const userRouter = router;
