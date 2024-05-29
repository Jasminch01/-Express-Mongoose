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

const academicSemesterSchema = new Schema<TacademicSemester>(
  {
    name: { type: String, enum: { values: ["Autumn", "Summer", "Fall"] } },
    year: { type: String },
    code: { type: String, enum: { values: ["01", "02", "03"] } },
    startMonth: { type: String, enum: months },
    endMonth: { type: String, enum: months },
  },
  {
    timestamps: true,
  }
);

academicSemesterSchema.pre("save", async function (next){
  const isSemisterExist = await academicSemesterModel.findOne({
    year : this.year,
    name : this.name
  })
  if (isSemisterExist) {
    throw new Error("Semester is already exist")
  }
  next()
})

export const academicSemesterModel = model<TacademicSemester>(
  "academic-semister",
  academicSemesterSchema
);
