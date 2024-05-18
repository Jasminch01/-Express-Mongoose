import Joi from "joi";

const guardianSchema = Joi.object({
  fatherName: Joi.string(),
  fatherOccupation: Joi.string(),
  fatherContactNo: Joi.string(),
  motherName: Joi.string(),
  motherOccupation: Joi.string(),
  motherContactNo: Joi.string(),
});

const localGuardianSchema = Joi.object({
  name: Joi.string().required(),
  contactNo: Joi.string().required(),
  occupation: Joi.string().required(),
});

const userNameSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .pattern(/^[A-Z][a-zA-Z]*$/, 'capitalize format')
    .messages({
      'string.pattern.name': '{#value} is not in capitalize format',
    }),
  middleName: Joi.string().allow(''),
  lastName: Joi.string().required(),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameSchema.required(),
  gender: Joi.string().valid("male", "female", "others").required().messages({
    "any.only":
      "{#label} field can be only one of the following: male, female, or others",
  }),
  dateOfBirth: Joi.string(),
  email: Joi.string().email().required(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string(),
  bloodGroup: Joi.string().valid(
    "A+",
    "A-",
    "B+",
    "B-",
    "O+",
    "O-",
    "AB+",
    "AB-"
  ),
  presentAddress: Joi.string(),
  permanentAddress: Joi.string(),
  guardian: guardianSchema.required(),
  localGuardian: localGuardianSchema.required().messages({
    "any.required": "local guardian is required",
  }),
  profileImg: Joi.string(),
  isActive: Joi.string().valid("active", "block").default("active"),
});

export default studentValidationSchema;
