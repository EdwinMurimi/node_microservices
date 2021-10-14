import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

function ForgotPasswordComponent(props) {

  const [values, setValues] = React.useState({
    email: ''
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  

  return (
    <div>
      <Modal
        keepMounted
        open={props.open}
        onClose={props.onClose}
        value={values.email}
        onChange={() => handleChange('email')}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <Typography sx={{ my: 2, width: '38ch' }} variant="body1" gutterBottom>Type in your email in the space below:</Typography>
          <TextField
            fullWidth
            label="E-mail"
            id="outlined-size-small"
            defaultValue="example@domain.com"
            size="small"
          />
          <Button fullWidth sx={{ mt: 2 }} variant="contained">Send email</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ForgotPasswordComponent;