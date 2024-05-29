export type Tmonths = 
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type TacademicSemester = {
    name : "Autunm" | "Summer" | "Fall",
    code : "01" | "02" | "03",
    year : Date,
    startMonth : Tmonths,
    endMonth : Tmonths,
}