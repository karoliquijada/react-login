import React from 'react';
import { Button, TextField, Card } from '@mui/material';


const RegisterCard = ({id, name, username, content }) => {
  return (
    <Card className="card-style" variant="outlined">
         <h1>Sign in</h1>
         <form>
            <TextField id="standard-basic" label="Username" variant="standard" />
            <TextField id="standard-basic" label="Password" variant="standard" />
            <Button variant="contained" color="primary">Sign in</Button>
        </form>
    </Card>
  );
  
}

export default RegisterCard;

