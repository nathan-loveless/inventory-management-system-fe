import React from "react";
import { useForm } from "react-hook-form";
import { sharedStyles } from "../materialui/styles/sharedStyles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { formStyles } from "../materialui/styles/formStyles";

const RegisterForm = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
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
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
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
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="email"
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    color="secondary"
                    htmlFor="email"
                    autoComplete="email"
                    inputRef={register({
                      required: "You must provide an Email",
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Please provide a valid Email!"
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

export default RegisterForm;
