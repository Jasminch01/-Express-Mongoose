import { ObjectId } from "mongodb";
import { StudentModel } from "../student.model";
import { Student } from "./student.interface";
import { error } from "console";

const createStudentDB = async (student: Student) => {
  // const result = await StudentModel.create(student);
  // return result; //in build static method

  //coustom instance
  const studentM = new StudentModel(student);

  if (await studentM.isUserExists(student.id)) {
    throw new Error("User already exist");
  }

  // const result = await studentM.save()
  // return result;
  //in build instance method
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
