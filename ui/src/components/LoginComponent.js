import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import ForgotPasswordComponent from './ForgotPasswordComponent';

function LoginComponent(props) {

  const [values, setValues] = React.useState({
    email: '',
    password: '',
    open: false,
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handleOpen = () => setValues({...values, open: true});

  const handleClose = () => setValues({...values, open: false});

  return (
    <Box
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" gutterBottom component="div">
        Sign in
      </Typography>
      <TextField
        label="E-mail"
        value={values.email}
        onChange={handleChange('email')}
        id="outlined-size-small"
        defaultValue="example@domain.com"
        size="small"
      />
      <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined" size="small">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button sx={{ m: 1, width: '38ch' }} variant="contained">Sign in</Button>
      <Typography sx={{ m: 1, width: '38ch' }} variant="body2" gutterBottom>Click here if you <Link style={{ textDecoration: 'none', color: '#34a4eb' }} to="#" onClick={handleOpen}>forgot password</Link></Typography>
      <Typography sx={{ m: 1, width: '38ch' }} variant="body2" gutterBottom>Don't have an account? <Link style={{ textDecoration: 'none', color: '#34a4eb' }} to="/auth/sign-up">Sign up</Link></Typography>
      <ForgotPasswordComponent open={values.open} onClose={handleClose} />
    </Box>
  )
}

export default LoginComponent
