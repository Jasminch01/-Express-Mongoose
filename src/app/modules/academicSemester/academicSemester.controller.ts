import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicSemesterServices } from "./academicSemester.service";

const crateSemester = catchAsync(async (req, res) => {
  const semester = req.body;

  const result = await academicSemesterServices.createSemesterDB(semester);

  sendResponse(res, {
    success: true,
    message: "semester created successfully",
    statusCode: httpStatus.OK,
    data: result,
  });
});

export const academicSemesterController = {
  crateSemester,
};
