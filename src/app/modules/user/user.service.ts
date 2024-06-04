import config from "../../config";
import { TacademicSemester } from "../academicSemester/academicSemester.interface";
import { academicSemesterModel } from "../academicSemester/academicSemester.model";
import { Student } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { Iuser } from "./user.interface";
import { User } from "./user.model";
import { generateStudentId } from "./users.utlis";

const createStudentDB = async (password: string, payload: Student) => {
  //create a user object
  const user: Partial<Iuser> = {};

  user.password = password || (config.default_password as string);
  //
  user.role = "student";

  //find eacademicsemester info
  const admissionSemester = await academicSemesterModel.findById(
    payload.admissionSemester
  );

  //generated id
  if (admissionSemester) {
    // Generate ID
    user.id = await generateStudentId(admissionSemester as TacademicSemester);
  } else {
    // Handle the case where admissionSemester is null
    throw new Error("Admission semester not found");
  }
  // user.id = await generateStudentId(admissionSemester)

  const newUser = await User.create(user);

  //createStudent

  if (Object.keys(newUser).length) {
    //set id _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; //referance id

    const newStudent = await StudentModel.create(payload);
    return newStudent;
  }
};

export const userServices = {
  createStudentDB,
};
