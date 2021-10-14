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
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { registeringUserRequest } from '../redux/actions/registeringUser'

function SignUpComponent() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [values, setValues] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
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

  const handleSignUp = async (params) => {

    await dispatch(registeringUserRequest(params));
    history.push('/');

  }

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
        Sign up
      </Typography>
      <div style={{ display: 'flex', width: '37ch' }} >
        <TextField
          label="First Name"
          value={values.firstname}
          onChange={handleChange('firstname')}
          id="outlined-first-name"
          size="small"
        />
        <TextField
          label="Last Name"
          value={values.lastname}
          onChange={handleChange('lastname')}
          id="outlined-last-name"
          size="small"
        />
      </div>
      <TextField
        label="E-mail"
        value={values.email}
        onChange={handleChange('email')}
        id="outlined-small"
        size="small"
      />
      <FormControl sx={{ m: 1, width: '35ch' }} variant="outlined" size="small">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-password"
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
      <Button onClick={() => handleSignUp(values)} sx={{ m: 1, width: '38ch' }} variant="contained">Sign up</Button>
      <Typography sx={{ m: 1, width: '38ch' }} variant="body2" gutterBottom>Already have an account? <Link to="/auth" style={{ textDecoration: 'none', color: '#34a4eb' }}>Sign in</Link></Typography>
    </Box>
  )
}

export default SignUpComponent
