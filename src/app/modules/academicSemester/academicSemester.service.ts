import { TacademicSemester } from "./academicSemester.interface";
import { academicSemesterModel } from "./academicSemester.model";

const createSemesterDB = async (semester: TacademicSemester) => {
  const result = await academicSemesterModel.create();
  return result;
};


export const academicSemesterServices = {
    createSemesterDB,
}