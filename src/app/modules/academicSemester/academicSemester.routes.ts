import express from "express";
import { academicSemesterController } from "./academicSemester.controller";
import validateRequestedData from "../../utils/validateRequestData";
import { academicValidations } from "./academicSemester.validation";
const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequestedData(
    academicValidations.createAcdemicSemesterValidationSchema
  ),
  academicSemesterController.crateSemester
);

export const academicSemesterRoutes = router;
