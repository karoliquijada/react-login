import React from 'react';
import { Button, TextField, Card, FormGroup, FormControlLabel, Checkbox } from '@mui/material';


const RegisterCard = ({ username, password }) => {
  return (
    <Card className="card-style" variant="outlined">
         <h1>Sign in</h1>
         <form>
            <TextField id="username-tf" label="Username" variant="standard" />
            <TextField id="password-tf" label="Password" variant="standard" />
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me sign in"/>
            </FormGroup>
            <Button variant="contained" color="secondary">Sign in</Button>
            <p>Not registered? Sign up now!</p>
            
        </form>
    </Card>
  );
  
}

export default RegisterCard;

