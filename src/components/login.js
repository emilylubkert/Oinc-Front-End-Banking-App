import { useState } from 'react';
import Card from './Card';
import ContactButton from './ContactButton';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Logo from './Logo';
import '../components.css';


function Login() {
  const auth = useAuth();
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginForm = () => {
    return (
      <Formik validateOnMount
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          auth.signin(values.email, values.password);
          setSubmitting(false);
          setShow(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>
                Email Address
              </label>
              <Field
                name='email'
                type='email'
                placeholder='Enter email'
                className='form-control'
              />

              <ErrorMessage name='email' />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <Field
                name='password'
                type='password'
                placeholder='Enter password'
                className='form-control'
              />
              <ErrorMessage name='password' />
            </div>
            <button
              type='submit'
              className='btn btn-dark'
              disabled={isSubmitting || !isValid}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    );
  };

  function clearForm() {
    setEmail('');
    setPassword('');
    setShow(true);
  }

  function logOut() {
    auth.signout();
    clearForm();
    console.log(`user is ${auth.user}`);
  }

  return (
    <>
     <Logo>
      <Card
        bgcolor='light'
        txtcolor='black'
        header='Login'
        body={
          show ? (
            <>
              <LoginForm />
            </>
          ) : (
            <>
              {auth.user ? (
                <>
                  <h5 className='welcome-text'>Welcome {auth.user.name}</h5>
                  <div className='btn-container'>
                  <button
                    type='submit'
                    className='btn btn-dark'
                    onClick={logOut}
                  >
                    Log Out
                  </button>
                  <Link className='btn btn-dark' role='button' to='../dashboard'>
                    Go To Dashboard
                  </Link>
                  </div>
                </>
              ) : (
                <>
                  <h5>Please create an account first.</h5>
                  <Link
                    className='btn btn-dark'
                    role='button'
                    to='../createaccount'
                  >
                    Create Account
                  </Link>
                </>
              )}
            </>
          )
        }
      />
     
      <ContactButton />
      </Logo>
    </>
  );
}

export default Login;
