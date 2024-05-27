import { RequestHandler } from "express";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { password, student } = req.body;
    // const { error, value } = studentValidationSchema.validate(student);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: "somthing went wrong",
    //     error: error.details,
    //   });
    // }
    const result = await userServices.createStudentDB(password, student);

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "student is created successfully",
      data: result,
    });
  } catch (error: any) {
    // res.status(500).json({
    //   success: false,
    //   message: error.message || "somthing went wrong",
    //   error: error,
    // });
    next(error);
  }
};

export const userController = {
  createStudent,
};
