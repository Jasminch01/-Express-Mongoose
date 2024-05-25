import { Schema, model, connect } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Student,
  // StudentMethods,
  StudentModels,
  UserName,
} from "./student.interface";
import bcrypt from "bcrypt";
import config from "../../config";

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
  firstName: {
    type: String,
    required: [true, "first name is required"],
    trim: true,
    maxlength: [20, "first name can not be more then 20 character"],
    validate: {
      validator: function (value: string) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
        return firstNameStr === value;
      },
      message: "{VALUE}  is not capitalize format",
    },
  },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const studentSchema = new Schema<Student, StudentModels>({
  id: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  name: {
    type: userName,
    required: true,
  },
  gender: {
    type: String,
    enum: {
      values: ["male", "female", "others"],
      message:
        "{VALUE}The gender fields can be only one of the following : male, female , or other",
    },
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
  guardian: {
    type: guardian,
    required: true,
  },
  localGuardian: {
    type: localGuardian,
    required: [true, "local guardian is required"],
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ["active", "block"],
    default: "active",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

//middleware save

studentSchema.pre("save", async function (next) {
  // console.log('this is pre')
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round)
  );
  next();
});

studentSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
  // console.log("after the save data");
});

//Query Middleware

studentSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next()
});

//static method

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await StudentModel.findOne({ id });
  return existingUser;
};

//coustom instance method

// studentSchema.methods.isUserExists = async function(id : string){
//   const existingUser = await StudentModel.findOne({id})
//   return existingUser;
// }

export const StudentModel = model<Student, StudentModels>(
  "student",
  studentSchema
);
