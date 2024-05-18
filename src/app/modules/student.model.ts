import { Schema, model, connect } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from "./student/student.interface";

const guardian = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
});

const localGuardian = new Schema<LocalGuardian>({
  name: { type: String },
  contactNo: { type: String },
  occupation: { type: String },
});

const userName = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userName,
  gender: {
    type: String,
    enum: ["male", "female", "others"],
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
  },
  presentAddress: { type: String },
  parmanentAddress: { type: String },
  guardian: guardian,
  localGuardian: localGuardian,
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ["active", "block"],
    default : "active"
  },
});

export const StudentModel = model<Student>("student", studentSchema);
