import { Router } from "express";
import { studentRoutes } from "../modules/student/student.route";
import { userRouter } from "../modules/user/user.route";

const router = Router();

router.use("/students", studentRoutes);
router.use("/users", userRouter);

export default router;
