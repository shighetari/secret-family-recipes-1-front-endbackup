import * as Yup from "yup";

const signupSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(3, "Username must be at least 3 characters long.")
    .required("Must include email address."),
  password: Yup
    .string()
    .min(6, "Passwords must be at least 6 characters long.")
    .required("Password is Required")
});


export default signupSchema;