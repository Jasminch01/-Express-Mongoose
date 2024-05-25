import { Request, Response } from "express";
import { studentServices } from "./student.service";

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

const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await studentServices.deleteStudentDB(id);
    res.status(200).json({
      success: true,
      message: "student is deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success : false,
      message : 'somthing went wrotng',
      error : error
    })
  }
};

const updateStudent = async(req: Request, res: Response) => {
  try {
    const {id }= req.params;
    const {name} = req.body;

    const result = await studentServices.updateStudentDB(id, name)
    res.status(200).json({
      success : true,
      message : 'update success',
      data : result
    })
  } catch (error) {
    
  }
}

export const studentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent
};
