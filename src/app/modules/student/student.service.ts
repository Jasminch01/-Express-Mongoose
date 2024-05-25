import { ObjectId } from "mongodb";
import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

// const createStudentDB = async (student: Student) => {
//   if (await StudentModel.isUserExists(student.id)) {
//     throw new Error("user already exist");
//   }
//   const result = await StudentModel.create(student);

//   return result; //in build static method

//   //coustom instance
//   // const studentM = new StudentModel(student);

//   // if (await studentM.isUserExists(student.id)) {
//   //   throw new Error("User already exist");
//   // }

//   // const result = await studentM.save()
//   // return result;
//   //in build instance method
// };

const getAllStudentsDB = async () => {
  // const result = await StudentModel.find();
  // return result;
};

const getSingleStudentDB = async (id: string) => {
  // const result = await StudentModel.findOne({ _id: new ObjectId(id) });
  // return result;
  const result = await StudentModel.aggregate([
    {$match : {id : id}}
  ])
  return result;
};

const deleteStudentDB = async (id: string) => {
  const result = await StudentModel.updateOne({id}, {isDeleted : true});
  return result;
};

const updateStudentDB = async (id : string, updateName : string) => {
  const result = await StudentModel.updateOne({id}, {"name.firstName": updateName})
  return result;
}

export const studentServices = {
  // createStudentDB,
  getAllStudentsDB,
  getSingleStudentDB,
  deleteStudentDB,
  updateStudentDB,
};
