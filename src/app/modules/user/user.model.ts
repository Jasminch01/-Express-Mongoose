import { Schema, model } from "mongoose";
import { Iuser } from "./user.interface";

const userSchema = new Schema<Iuser>({
  id: { type: String, required: true },
  password: { type: String, required: true },
  needsPasswordChange: { type: Boolean, default : true},
  role: { type: String, enum: ["admin", "student", "faculty"], required: true },
  status: { type: String, enum: ["in-progress", "blocked"] , default : 'in-progress'},
  isDeleted: { type: Boolean, default: true },
}, {
    //default : createdAt updatedAt
    timestamps : true
});

export const User = model<Iuser>("user", userSchema)
