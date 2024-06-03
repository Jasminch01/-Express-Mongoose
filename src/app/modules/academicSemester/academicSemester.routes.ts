import express from "express";
import { academicSemesterController } from "./academicSemester.controller";
import validateRequestedData from "../../utils/validateRequestData";
import { academicValidations } from "./academicSemester.validation";
import { ZodObject, ZodOptional, ZodEnum, ZodString, ZodTypeAny } from "zod";
const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequestedData(
    academicValidations.createAcdemicSemesterValidationSchema
  ),
  academicSemesterController.crateSemester
);

router.get(
  "/:semesterId",
  academicSemesterController.getSingleAcademicSemester
);

router.patch(
  "/:semesterId",
  validateRequestedData(
    academicValidations.updateAcademicSemesterValidationSchema
  ),
  academicSemesterController.updateAcademicSemester
);

router.get("/", academicSemesterController.getAllAcademicSemesters);

export const academicSemesterRoutes = router;
