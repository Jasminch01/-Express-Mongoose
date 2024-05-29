export type Tmonths =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type TAcademicSemesterName = "Autumn" | "Summar" | "Fall";
export type TAcademicSemesterCode = "01" | "02" | "03";

export type TacademicSemester = {
  name: TAcademicSemesterName;
  year: string;
  code: TAcademicSemesterCode;
  startMonth: Tmonths;
  endMonth: Tmonths;
};
