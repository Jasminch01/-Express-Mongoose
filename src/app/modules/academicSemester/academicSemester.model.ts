import { Schema, model } from "mongoose";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  Months,
} from "./academicSemester.constant";
import { TacademicSemester } from "./academicSemester.interface";

const academicSemesterSchema = new Schema<TacademicSemester>(
  {
    name: {
      type: String,
      required: true,
      enum: { values: AcademicSemesterName },
    },
    year: { type: String, required: true },
    code: {
      type: String,
      required: true,
      enum: { values: AcademicSemesterCode },
    },
    startMonth: { type: String, required: true, enum: Months },
    endMonth: { type: String, required: true, enum: Months },
  },
  {
    timestamps: true,
  }
);

//check semester is exist same year
academicSemesterSchema.pre("save", async function (next) {
  const isSemisterExist = await academicSemesterModel.findOne({
    year: this.year,
    name: this.name,
  });
  if (isSemisterExist) {
    throw new Error("Semester is already exist");
  }
  next();
});

export const academicSemesterModel = model<TacademicSemester>(
  "academicSemester",
  academicSemesterSchema
);
