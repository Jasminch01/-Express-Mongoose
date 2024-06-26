import  bcrypt  from 'bcrypt';
import { Schema, model } from "mongoose";
import { Iuser } from "./user.interface";
import config from '../../config';

const userSchema = new Schema<Iuser>(
  {
    id: { type: String, required: true , unique : true},
    password: { type: String, required: true },
    needsPasswordChange: { type: Boolean, default: true },
    role: {
      type: String,
      enum: ["admin", "student", "faculty"],
      required: true,
    },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],
      default: "in-progress",
    },
    isDeleted: { type: Boolean, default: true },
  },
  {
    //default : createdAt updatedAt
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round as string)
  );
  next();
});

// set '' after saving password
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const User = model<Iuser>("user", userSchema);
