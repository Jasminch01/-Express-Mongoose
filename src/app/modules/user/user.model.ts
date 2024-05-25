import { Schema, model } from "mongoose";
import { Iuser } from "./user.interface";
import { boolean } from "joi";

const userSchema = new Schema<Iuser>({
  id: { type: String, required: true },
  password: { type: String, required: true },
  needsPasswordChange: { type: Boolean, required: true },
  role: { type: String, enum: ["admin", "student", "faculty"], required: true },
  status: { type: String, enum: ["in-progress", "blocked"] },
  isDeleted: { type: Boolean, required: true },
}, {
    //default : createdAt updatedAt
    timestamps : true
});

export const User = model<Iuser>("user", userSchema)
