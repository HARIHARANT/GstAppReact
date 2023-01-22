import { Field, Form, Formik } from 'formik';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/login';
import globalObj from './Common';
const LoginComp = () => {
  const dispatch = useDispatch();

  const loginSubmit = (values) => {
    dispatch(login({ ...values }));
  };

  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!globalObj.regEx.email.test(values.email)) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'Required';
          } else if (!globalObj.regEx.password.test(values.password)) {
            errors.password = 'Invalid Password';
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            loginSubmit(values);
            setSubmitting(false);
          }, 0);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <h1>{globalObj.loginScr}</h1>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginComp;
