import { academicSemesterNameCodeMapper } from "./academicSemester.constant";
import { TacademicSemester } from "./academicSemester.interface";
import { academicSemesterModel } from "./academicSemester.model";

const createSemesterDB = async (payload: TacademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] != payload.code) {
    throw new Error("Invalid Semester code");
  }
  const result = await academicSemesterModel.create(payload);
  return result;
};

export const academicSemesterServices = {
  createSemesterDB,
};
