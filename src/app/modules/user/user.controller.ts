import { userServices } from "./user.service";

const createStudent= async (req: Request, res: Response) => {
  try {
    const {password, student} = req.body;
    // const { error, value } = studentValidationSchema.validate(student);

    // if (error) {
    //   res.status(500).json({
    //     success: false,
    //     message: "somthing went wrong",
    //     error: error.details,
    //   });
    // }

    const result = await userServices.createStudentDB(password, student);

    res.status(200).json({
      success: true,
      message: "student created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || "somthing went wrong",
      error: error,
    });
  }
};

export const userController = {
    createStudent,
}