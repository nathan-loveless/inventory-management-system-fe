import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import { DialogTitle, Grid, DialogContent } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";

import { sharedStyles } from "../../../materialui/styles/sharedStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { formStyles } from "../../../materialui/styles/formStyles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const EditDialog = props => {
  const { register, errors, handleSubmit, control } = useForm();
  const [user, setUser] = useState(props.user);
  const [value, setValue] = useState(true);

  const classes = formStyles();
  const sharedClasses = sharedStyles();

  const onSubmit = (data, e) => {
    e.preventDefault();
    props.submitEditedData(data, props.user.id, props.user.status);
    props.handleEditClicked();
  };

  const handleEditClosed = () => {
    props.handleEditClicked();
  };

  return (
    <Dialog
      onClose={handleEditClosed}
      aria-labelledby="edit-dialog-title"
      open={props.editClicked}
    >
      <DialogContent className={sharedClasses.dialogMain}>
        <DialogTitle
          id="edit-dialog-title"
          className={sharedClasses.dialogTitle}
        >
          User Details - Edit Mode
        </DialogTitle>
        <div className={sharedClasses.root}>
          <Grid container component="main" className={sharedClasses.root}>
            <Grid item xs={12} elevation={6} square>
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
                      defaultValue={user.firstName}
                      id="firstName"
                      label="First Name"
                      color="secondary"
                      htmlFor="firstName"
                      autoComplete="fname"
                      onChange={e => {
                        setUser(e.target.name, e.target.value);
                      }}
                      textfieldProps={{
                        InputLabelProps: value ? { shrink: true } : {}
                      }}
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
                      defaultValue={user.lastName}
                      id="lastName"
                      label="Last Name"
                      color="secondary"
                      htmlFor="lastName"
                      autoComplete="lname"
                      onChange={e => {
                        setUser(e.target.name, e.target.value);
                      }}
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
                      defaultValue={user.address}
                      id="address"
                      label="Address"
                      color="secondary"
                      htmlFor="address"
                      autoComplete="address"
                      onChange={e => {
                        setUser(e.target.name, e.target.value);
                      }}
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
                      defaultValue={user.city}
                      id="city"
                      label="City"
                      color="secondary"
                      htmlFor="city"
                      autoComplete="city"
                      onChange={e => {
                        setUser(e.target.name, e.target.value);
                      }}
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
                    <TextField
                      type="text"
                      name="state"
                      variant="outlined"
                      required
                      fullWidth
                      defaultValue={user.state}
                      id="state"
                      label="State"
                      color="secondary"
                      htmlFor="state"
                      autoComplete="state"
                      onChange={e => {
                        setUser(e.target.name, e.target.value);
                      }}
                      inputRef={register({
                        required: "State is required",
                        message: "State is required"
                      })}
                    />
                    {errors.state && (
                      <div className={classes.error}>
                        {errors.state.message}
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      type="text"
                      name="zipcode"
                      variant="outlined"
                      required
                      fullWidth
                      defaultValue={user.zipcode}
                      id="zipcode"
                      label="Zip Code"
                      color="secondary"
                      htmlFor="zipcode"
                      autoComplete="zipcode"
                      onChange={e => {
                        setUser(e.target.name, e.target.value);
                      }}
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
                      defaultValue={user.username}
                      id="username"
                      label="User Name"
                      color="secondary"
                      htmlFor="username"
                      autoComplete="username"
                      onChange={e => {
                        setUser(e.target.name, e.target.value);
                      }}
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
                      defaultValue={user.email}
                      id="email"
                      label="Email Address"
                      color="secondary"
                      htmlFor="email"
                      autoComplete="email"
                      onChange={e => {
                        setUser(e.target.name, e.target.value);
                      }}
                      inputRef={register({
                        required: "You must provide an email address",
                        pattern: {
                          value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          message: "Please provide a valid email address!"
                        }
                      })}
                    />
                    {errors.email && (
                      <div className={classes.error}>
                        {errors.email.message}
                      </div>
                    )}
                  </Grid>

                  <Grid item xs={4}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="status-select-label">Status</InputLabel>
                      <Controller
                        as={
                          <Select
                            labelId="status-select-label"
                            id="status-select-outlined"
                            label="Status"
                            color="secondary"
                            onChange={e => {
                              setUser(e.target.name, e.target.value);
                            }}
                          >
                            <MenuItem value={"active"}>active</MenuItem>
                            <MenuItem value={"inactive"}>inactive</MenuItem>
                            <MenuItem value={"pending"}>pending</MenuItem>
                          </Select>
                        }
                        name="status"
                        control={control}
                        defaultValue={user.status}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="role-select-label">Role</InputLabel>
                      <Controller
                        as={
                          <Select
                            labelId="role-select-label"
                            id="role-select-outlined"
                            label="role"
                            color="secondary"
                            onChange={e => {
                              setUser(e.target.name, e.target.value);
                            }}
                          >
                            <MenuItem value={"admin"}>admin</MenuItem>
                            <MenuItem value={"execute"}>execute</MenuItem>
                            <MenuItem value={"read"}>read</MenuItem>
                            <MenuItem value={"none"}>none</MenuItem>
                          </Select>
                        }
                        name="role"
                        control={control}
                        defaultValue={user.role}
                      />
                    </FormControl>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="secondary"
                  className={classes.submit}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditDialog;
