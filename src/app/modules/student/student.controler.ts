import { studentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";

const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await studentServices.getAllStudentsDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "students are retrived successfully",
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await studentServices.getSingleStudentDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "student is retrived successfully",
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await studentServices.deleteStudentDB(id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "student is deleted successfully",
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = await studentServices.updateStudentDB(id, name);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "student update success",
    data: result,
  });
});

export const studentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent,
};
