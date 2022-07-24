import "./styles.css";
import { useFormik } from "formik";
function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },

    onSubmit: (values) => {
      alert("Login Sucessfuly");
    },

    validate: (values) => {
      let errors = {};
      if (!values.email)
        errors.email = <p style={{ color: "red" }}>field required</p>;
      else if (!/^(.+)@(.+)$/.test(values.email)) {
        errors.email = (
          <p style={{ color: "red" }}>username should be an email</p>
        );
      }
      if (!values.password)
        errors.password = <p style={{ color: "red" }}>field required</p>;
      return errors;
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <br />
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <br />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      <button type="submit">Submit</button>
    </form>
  );
}
export default App;
