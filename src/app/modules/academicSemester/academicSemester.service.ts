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

const getAllAcademicSemestersDB = async () => {
  const result = await academicSemesterModel.find();
  return result;
};

const getSingleAcademicSemesterDB = async (id: string) => {
  const result = await academicSemesterModel.findById(id);
  return result;
};

const updateAcademicSemesterDB = async (
  id: string,
  payload: Partial<TacademicSemester>
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameCodeMapper[payload.name] !== payload.code
  ) {
    throw new Error("Invalid Semester Code");
  }

  const result = await academicSemesterModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );
  return result;
};

export const academicSemesterServices = {
  createSemesterDB,
  getAllAcademicSemestersDB,
  getSingleAcademicSemesterDB,
  updateAcademicSemesterDB,
};
