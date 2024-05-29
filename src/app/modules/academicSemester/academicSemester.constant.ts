import { TAcademicSemesterCode, TAcademicSemesterName, TacademicSemesterNameCodeMapper, Tmonths } from "./academicSemester.interface";

export const Months: Tmonths[] = [
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

export const AcademicSemesterName: TAcademicSemesterName[] = [
  "Autumn",
  "Summar",
  "Fall",
];

export const AcademicSemesterCode: TAcademicSemesterCode[] = ["01", "02", "03"];

export const academicSemesterNameCodeMapper : TacademicSemesterNameCodeMapper = {
  Autumn : "01",
  Summer : '02',
  Fall : '03'
}