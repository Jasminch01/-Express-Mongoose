import { Schema, model, connect } from "mongoose";
import { Guardian, LocalGuardian, Student } from "./student/student.interface";

const guardian = new Schema<Guardian>({
    fatherName : {type : String},
    fatherOccupation : {type : String},
    fatherContactNo : {type : String},
    motherName : {type : String},
    motherOccupation : {type : String},
    motherContactNo : {type : String}
})

const localGuardian = new Schema<LocalGuardian>({
    name : {type : String},
    contactNo : {type : String},
    occupation : {type : String}
})

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: { type: String, required: true },
    middleName : {type : String},
    lastName : {type : String, required : true}
  },
  gender : ["male", 'female'],
  dateOfBirth : {type: String},
  email : {type : String, required : true},
  contactNo : {type: String, required : true},
  emergencyContactNo : {type : String},
  bloodGroup : [ "A+" , "A-" , "B+" , "B-" , "O+" , "O-" , "AB+" , "AB-"],
  presentAddress : {type : String},
  parmanentAddress : {type : String},
  guardian : guardian,
  localGuardian : localGuardian,
  profileImg : {type : String},
  isActive : ['active', 'inactive']

});
