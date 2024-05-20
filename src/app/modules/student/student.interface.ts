import { Schema, model, connect, Model } from "mongoose";

export interface Guardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
}

export interface UserName {
  firstName: string;
  middleName: string;
  lastName: string;
}
export interface LocalGuardian {
  name: string;
  contactNo: string;
  occupation: string;
}
export interface Student {
  id: string;
  password : string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth?: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB-";
  presentAddress: string;
  parmanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: "active" | "inactive";
  isDeleted : boolean
}

//create static method
export interface StudentModels extends Model<Student> {
  isUserExists(id: string): Promise<Student | null>;
}

//create coustom instance method

// export interface StudentMethods  {
//   isUserExists(id: string): Promise<Student | null>;
// };

// export type StudentModels = Model<Student, Record<string, never>, StudentMethods>;
