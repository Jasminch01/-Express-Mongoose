import { Schema, model } from "mongoose";
import { TacademicSemester, Tmonths } from "./academicSemester.interface";

const months: Tmonths[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const academicSemesterSchema = new Schema<TacademicSemester>({
  name: { type: String, enum: { values: ["Autumn", "Summer", "Fall"] } },
  year : {type : Date},
  code: { type: String, enum: { values: ["01", "02", "03"] } },
  startMonth: { type: String, enum: months },
  endMonth: { type: String, enum: months },
});

export const academicSemesterModel = model<TacademicSemester>(
  "academic-semister",
  academicSemesterSchema
);

