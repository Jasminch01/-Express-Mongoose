import { ObjectId } from "mongodb";
import { StudentModel } from "../student.model";
import { Student } from "./student.interface";

const createStudentDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentDB = async (id: string) => {
  const result = await StudentModel.findOne({ _id: new ObjectId(id) });
  return result;
};

export const studentServices = {
  createStudentDB,
  getAllStudentsDB,
  getSingleStudentDB,
};
