import { Schema, model, connect } from "mongoose";

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
    name : string;
    contactNo : string;
    occupation : string;
}
export interface Student {
  id: string;
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
  localGuardian : LocalGuardian;
  profileImg? : string;
  isActive : "active" | "inactive"
}
