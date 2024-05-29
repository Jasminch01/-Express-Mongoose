import express from "express";
import { academicSemesterController } from "./academicSemester.controller";
import validateRequestedData from "../../utils/validateRequestData";
import academicSemesterValidation from "./academicSemester.validation";
const router = express.Router();

router.post("/create-academic-semester", validateRequestedData(academicSemesterValidation), academicSemesterController.crateSemester);

export const academicSemesterRoutes = router;
