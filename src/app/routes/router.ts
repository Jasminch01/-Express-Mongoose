import { Router } from "express";
import { studentRoutes } from "../modules/student/student.route";
import { userRouter } from "../modules/user/user.route";
import { academicSemesterRoutes } from "../modules/academicSemester/academicSemester.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/students",
    route: studentRoutes,
  },
  {
    path: "/users",
    route: userRouter,
  },
  {
    path: "/academic-semester",
    route: academicSemesterRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
