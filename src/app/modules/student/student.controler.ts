import { NextFunction, Request, RequestHandler, Response } from "express";
import { studentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};

const getAllStudents = catchAsync(async (req, res, next) => {
  const result = await studentServices.getAllStudentsDB();
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "students are retrived successfully",
    data: result,
  });
});

const getSingleStudent: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await studentServices.getSingleStudentDB(id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "student is retrived successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await studentServices.deleteStudentDB(id);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "student is deleted successfully",
      data: result,
    });
  } catch (error) {
    // res.status(200).json({
    //   success : false,
    //   message : 'somthing went wrotng',
    //   error : error
    // })
    next(error);
  }
};

const updateStudent: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const result = await studentServices.updateStudentDB(id, name);
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "student update success",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent,
};
