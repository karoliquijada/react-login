import React from 'react';
import { Button, TextField, Card, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .required('Username is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const RegisterCard = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Card className="card-style" variant="outlined">
         <h1>Sign in</h1>
         <form onSubmit={formik.handleSubmit}>
            <TextField 
              id="username" 
              name="username" 
              label="Username" 
              variant="standard"
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username} 
            />
            <TextField 
              id="password" 
              name="password"
              label="Password" 
              type="password"
              variant="standard"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me sign in"/>
            </FormGroup>
            <Button variant="contained" color="secondary" type="submit">Sign in</Button>
            <p>Not registered? Sign up now!</p>            
        </form>
    </Card>
  );
  
}

export default RegisterCard;


