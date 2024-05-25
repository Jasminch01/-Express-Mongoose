import config from "../../config";
import { Student,} from "../student/student.interface";
import { Iuser } from "./user.interface";
import { User } from "./user.model";

const createStudentDB = async (password: string, student: Student) => {
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
  //menually set id
  user.id = "2030001";
  const result = await User.create(user);

  //createStudent

  if (Object.keys(result).length) {
    //set id _id as user
    student.id = result.id;
    student.user = result._id;
  }

  return result;
};

export const userServices = {
  createStudentDB,
};