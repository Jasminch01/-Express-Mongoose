import { NextFunction, Request, Response } from "express";
import { studentServices } from "./student.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await studentServices.getAllStudentsDB();
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "students are retrived successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

const updateStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
