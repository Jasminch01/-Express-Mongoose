import { Router } from "express";
import { studentRoutes } from "../modules/student/student.route";
import { userRouter } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/students",
    route: studentRoutes,
  },
  {
    path: "/students",
    route: userRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
