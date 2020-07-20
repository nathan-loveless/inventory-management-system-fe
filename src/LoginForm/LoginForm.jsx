import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { sharedStyles } from "../materialui/styles/sharedStyles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { formStyles } from "../materialui/styles/formStyles";
import { userLogon, taskStart } from "../actions/actions";

const LoginForm = props => {
  const { register, errors, handleSubmit } = useForm();

  const classes = formStyles();
  const sharedClasses = sharedStyles();

  const onSubmit = (data, e) => {
    e.preventDefault();
    props.userLogon(
      {
        username: data.username,
        password: data.password
      },
      props
    );
  };

  return (
    <div className={sharedClasses.root}>
      <Grid container component="main" className={classes.root}>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper} component="main">
            <Typography component="h1" variant="h5">
              Log in
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
                    name="username"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    value="nathansl2003"
                    id="username"
                    label="User Name"
                    color="secondary"
                    htmlFor="username"
                    autoComplete="username"
                    autoFocus
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    type="password"
                    name="password"
                    variant="outlined"
                    margin="normal"
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
                Sign In
              </Button>
              <Grid container color="red">
                <Grid item>
                  <Link to="/signup" style={{ color: "#808080" }}>
                    Don't have an account? Sign Up
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

export default connect(mapStateToProps, { userLogon, taskStart })(LoginForm);
