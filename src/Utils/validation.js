import * as yup from "yup"

const validateSchema = yup.object({
    name: yup
      .string()
      .max(15, "Name must be less than or equal to 15 character")
      .required("Required"),
    email: yup.string().email("Email is invalid").required("Required"),
    channel: yup.string().required("Required"),
    image: yup
      .mixed()
      .required("Required")
      .test("fileSize", "Image Size is too large", (values) => {
        return !values || values.size <= 2097152;
      }),
    status: yup.string().required("Required"),
    country: yup.string().required("Required"),
  });

  export default validateSchema