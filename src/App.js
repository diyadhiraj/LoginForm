import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
    console.log(values);
    if(!formik.errors.email && !formik.errors.validEmail && !formik.errors.password) alert("Login Successful");
  },
    validate: values => {
      let errors = {};
      if(!values.email) errors.email = 'Field Required';
      if(!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email))) errors.validEmail = "Username should be an email";
      if(!values.password) errors.password = 'Field Required';
      return errors

    }
  }
);

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id = "emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div>: null}
        {formik.errors.validEmail? <div id="emailError" style={{color:'red'}}>{formik.errors.validEmail}</div>: null}
        
        

        <div>Password</div>
        <input id = "pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div>: null}


        <button id = "submitBtn" type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;
