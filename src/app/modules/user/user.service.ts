import config from "../../config";
import { TacademicSemester } from "../academicSemester/academicSemester.interface";
import { Student } from "../student/student.interface";
import { StudentModel } from "../student/student.model";
import { Iuser } from "./user.interface";
import { User } from "./user.model";

const createStudentDB = async (password: string, payload: Student) => {
  // if (await User.isUserExists(student.id)) {
  //   throw new Error("user already exist");
  // }

  //create a user object
  const user: Partial<Iuser> = {};
  //if password is not giver use default password
  // if (!password) {
  //     user.password = config.default_password
  // }else{
  //     user.password = password
  // }
  user.password = password || config.default_password;
  user.role = "student";
  //academic semester year, code
 
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
