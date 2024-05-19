import { Request, Response } from "express";
import { studentServices } from "./student.service";
import studentValidationSchema from "./student.validation";

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    const { error, value } = studentValidationSchema.validate(student);

    if (error) {
      res.status(500).json({
        success: false,
        message: "somthing went wrong",
        error: error.details,
      });
    }

    const result = await studentServices.createStudentDB(value);

    res.status(200).json({
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "somthing went wrong",
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsDB();
    res.status(200).json({
      success: true,
      message: "students are retrive successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await studentServices.getSingleStudentDB(id);
    res.status(200).json({
      success: true,
      message: "student is retrived success",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const studentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
