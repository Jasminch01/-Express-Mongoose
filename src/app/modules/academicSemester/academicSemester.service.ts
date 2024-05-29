import { TacademicSemester } from "./academicSemester.interface";
import { academicSemesterModel } from "./academicSemester.model";

const createSemesterDB = async (payload: TacademicSemester) => {
  const result = await academicSemesterModel.create(payload);
  return result;
};

export const academicSemesterServices = {
  createSemesterDB,
};
