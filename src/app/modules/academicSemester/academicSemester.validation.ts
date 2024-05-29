import { z } from "zod";
import { Tmonths } from "./academicSemester.interface";
import { string } from "joi";
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
const academicSemesterValidation = z.object({
  name: z.enum(["Autumn", "Summer", "Fall"]),
  year : z.date(),
  code: z.enum(["01", "02", "03"]),
  startMonth: z.enum([...months] as [string]),
  endMonth: z.enum([...months] as [string]),
});

export default academicSemesterValidation;
