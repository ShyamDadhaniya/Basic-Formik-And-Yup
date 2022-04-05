import React from "react";
import { useFormik } from "formik";
import validateSchema from "../Utils/validation";
// import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  image: null,
  status: "",
  country: "",
};

function onSubmit(values) {
  // console.log("hello");
  console.log(URL.createObjectURL(values.image));
  console.log("Form Data", values);
}

// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   }
//   if (!values.channel) {
//     errors.channel = "Required";
//   }
//   return errors;
// };

// const validateSchema = yup.object({
//   name: yup
//     .string()
//     .max(15, "Name must be less than or equal to 15 character")
//     .required("Required"),
//   email: yup.string().email("Email is invalid").required("Required"),
//   channel: yup.string().required("Required"),
//   image: yup
//     .mixed()
//     .required("Required")
//     .test("fileSize", "Image Size is too large", (values) => {
//       return !values || values.size <= 2097152;
//     }),
//   status: yup.string().required("Required"),
//   country: yup.string().required("Required"),
// });
const YouTubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: validateSchema,
  });
  // console.log("Field Touch", formik.touched);
  // console.log(formik.errors)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Profile</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(event) =>
              formik.setFieldValue("image", event.target.files[0])
            }
            onBlur={formik.handleBlur}
          />
          {formik.touched.image && formik.errors.image ? (
            <div className="error">{formik.errors.image}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>
        <div>
          <span>Your status</span>
          <label>
            <input
              type={"radio"}
              name="status"
              value={"single"}
              onChange={formik.handleChange}
            />
            Single
          </label>
          <label>
            <input
              type={"radio"}
              name="status"
              value={"Commited"}
              onChange={formik.handleChange}
            />
            Commited
          </label>
          <label>
            <input
              type={"radio"}
              name="status"
              value={"coder"}
              onChange={formik.handleChange}
            />
            Coder
          </label>
          {formik.touched.status && formik.errors.status ? (
            <div className="error">{formik.errors.status}</div>
          ) : null}
          <select
            name="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Dubai">Dubai</option>
          </select>
          {formik.touched.country && formik.errors.country ? (
            <div className="error">{formik.errors.country}</div>
          ) : null}
          <br />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YouTubeForm;
