import React from "react";
import { connect } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { registerAccount, taskStart } from "../actions/actions";
import { sharedStyles } from "../materialui/styles/sharedStyles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { formStyles } from "../materialui/styles/formStyles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { usStates } from "../usStates";

const RegisterForm = props => {
  const { register, errors, handleSubmit, control } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    props.registerAccount(
      {
        username: data.username,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        city: data.city,
        state: data.state,
        zipcode: data.zipcode,
        email: data.email,
        status: "",
        role: ""
      },
      props
    );
  };

  const classes = formStyles();
  const sharedClasses = sharedStyles();

  return (
    <div className={sharedClasses.root}>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper} component="main">
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="text"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    value="Nathan"
                    id="firstName"
                    label="First Name"
                    color="secondary"
                    htmlFor="firstName"
                    autoComplete="fname"
                    inputRef={register({
                      required: "First name is required",
                      message: "First name is required"
                    })}
                    autoFocus
                  />
                  {errors.firstName && (
                    <div className={classes.error}>
                      {errors.firstName.message}
                    </div>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="text"
                    name="lastName"
                    variant="outlined"
                    required
                    fullWidth
                    value="Loveless"
                    id="lastName"
                    label="Last Name"
                    color="secondary"
                    htmlFor="lastName"
                    autoComplete="lname"
                    inputRef={register({
                      required: "Last name is required",
                      message: "Last name is required"
                    })}
                  />
                  {errors.lastName && (
                    <div className={classes.error}>
                      {errors.lastName.message}
                    </div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="address"
                    variant="outlined"
                    required
                    fullWidth
                    value="161 Central Street Apt. B"
                    id="address"
                    label="Address"
                    color="secondary"
                    htmlFor="address"
                    autoComplete="address"
                    inputRef={register({
                      required: "Address is required",
                      message: "Address is required"
                    })}
                  />
                  {errors.address && (
                    <div className={classes.error}>
                      {errors.address.message}
                    </div>
                  )}
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    type="text"
                    name="city"
                    variant="outlined"
                    required
                    fullWidth
                    value="Northfield"
                    id="city"
                    label="City"
                    color="secondary"
                    htmlFor="city"
                    autoComplete="city"
                    inputRef={register({
                      required: "City is required",
                      message: "City is required"
                    })}
                  />
                  {errors.city && (
                    <div className={classes.error}>{errors.city.message}</div>
                  )}
                </Grid>
                <Grid item xs={4}>
                  {/* <InputLabel id="demo-simple-select-outlined-label">
                    User Type
                  </InputLabel>
                  <Controller
                    as={
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="City"
                        color="secondary"
                      >
                        {usStates.states.map(state => (
                          <MenuItem value={state}>{state}</MenuItem>
                        ))}
                      </Select>
                    }
                    name="userType"
                    rules={{ required: "You must select a user type" }}
                    control={control}
                    defaultValue=""
                  /> */}
                  <TextField
                    type="text"
                    name="state"
                    variant="outlined"
                    required
                    fullWidth
                    value="Vermont"
                    id="state"
                    label="State"
                    color="secondary"
                    htmlFor="state"
                    autoComplete="state"
                    inputRef={register({
                      required: "State is required",
                      message: "State is required"
                    })}
                  />
                  {errors.state && (
                    <div className={classes.error}>{errors.state.message}</div>
                  )}
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    type="text"
                    name="zipcode"
                    variant="outlined"
                    required
                    fullWidth
                    value="05663"
                    id="zipcode"
                    label="Zip Code"
                    color="secondary"
                    htmlFor="zipcode"
                    autoComplete="zipcode"
                    inputRef={register({
                      required: "You must provide a zip code",
                      pattern: {
                        value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                        message: "Please provide a valid zip code!"
                      }
                    })}
                  />
                  {errors.zipcode && (
                    <div className={classes.error}>
                      {errors.zipcode.message}
                    </div>
                  )}
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    type="text"
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    value="nathansl2003"
                    id="username"
                    label="User Name"
                    color="secondary"
                    htmlFor="username"
                    autoComplete="username"
                    inputRef={register({
                      required: "Username is required",
                      message: "Username is required"
                    })}
                  />
                  {errors.username && (
                    <div className={classes.error}>
                      {errors.username.message}
                    </div>
                  )}
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    type="text"
                    name="email"
                    variant="outlined"
                    required
                    fullWidth
                    value="nathansl2003@yahaoo.com"
                    id="email"
                    label="Email Address"
                    color="secondary"
                    htmlFor="email"
                    autoComplete="email"
                    inputRef={register({
                      required: "You must provide an email address",
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Please provide a valid email address!"
                      }
                    })}
                  />
                  {errors.email && (
                    <div className={classes.error}>{errors.email.message}</div>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    name="password"
                    variant="outlined"
                    required
                    fullWidth
                    value="Password@1"
                    id="password"
                    label="Password"
                    color="secondary"
                    htmlFor="password"
                    autoComplete="current-password"
                    inputRef={register({
                      required: "You must provide a password",
                      pattern: {
                        value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                        message:
                          "Your password must contain Must contain 8 characters - one uppercase, one lowercase, one number, one special"
                      }
                    })}
                  />
                  {errors.password && (
                    <div className={classes.error}>
                      {errors.password.message}
                    </div>
                  )}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container className={classes.signIn}>
                <Grid item>
                  <Link to="/login" style={{ color: "#808080" }}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { registerAccount, taskStart })(
  RegisterForm
);
