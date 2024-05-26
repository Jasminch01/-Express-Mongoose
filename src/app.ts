import express, { Application, Request, Response } from "express";
import cors from "cors";
import { studentRoutes } from "./app/modules/student/student.route";
import { userRouter } from "./app/modules/user/user.route";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import router from "./app/routes/router";
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//application routes

app.use("/api/v1/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello this is server running");
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
