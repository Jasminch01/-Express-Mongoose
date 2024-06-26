import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const createStudent = catchAsync(async (req, res) => {
  const { password, student } = req.body;
  const result = await userServices.createStudentDB(password, student);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "student is created successfully",
    data: result,
  });
});

export const userController = {
  createStudent,
};
