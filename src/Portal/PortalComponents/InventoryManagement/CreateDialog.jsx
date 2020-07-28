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

const CreateDialog = props => {
  const { register, errors, handleSubmit, control } = useForm();
  const [shrinkValue, setValue] = useState(true);

  const classes = formStyles();
  const sharedClasses = sharedStyles();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("NL: CreateDialog.jsx: onSubmit: data: ", data);
    props.submitCreatedData(data);
    props.handleCreateClicked();
  };

  const handleEditClosed = () => {
    props.handleCreateClicked();
  };

  return (
    <Dialog
      onClose={handleEditClosed}
      aria-labelledby="edit-dialog-title"
      open={props.createClicked}
    >
      <DialogContent className={sharedClasses.dialogMain}>
        <DialogTitle
          id="edit-dialog-title"
          className={sharedClasses.dialogTitle}
        >
          Inventory Details - Edit Mode
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
                      name="name"
                      variant="outlined"
                      required
                      fullWidth
                      id="name"
                      label=" Name"
                      color="secondary"
                      htmlFor="name"
                      autoComplete="name"
                      textfieldProps={{
                        InputLabelProps: shrinkValue ? { shrink: true } : {}
                      }}
                      inputRef={register({
                        required: "Name is required",
                        message: "Name is required"
                      })}
                      autoFocus
                    />
                    {errors.name && (
                      <div className={classes.error}>{errors.name.message}</div>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      type="text"
                      name="sku"
                      variant="outlined"
                      required
                      fullWidth
                      id="sku"
                      label=" SKU"
                      color="secondary"
                      htmlFor="sku"
                      autoComplete="sku"
                      textfieldProps={{
                        InputLabelProps: shrinkValue ? { shrink: true } : {}
                      }}
                      inputRef={register({
                        required: "SKU is required",
                        message: "SKU is required"
                      })}
                    />
                    {errors.sku && (
                      <div className={classes.error}>{errors.sku.message}</div>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      type="text"
                      name="supplier"
                      variant="outlined"
                      required
                      fullWidth
                      id="supplier"
                      label=" Supplier"
                      color="secondary"
                      htmlFor="supplier"
                      autoComplete="supplier"
                      textfieldProps={{
                        InputLabelProps: shrinkValue ? { shrink: true } : {}
                      }}
                      inputRef={register({
                        required: "Supplier is required",
                        message: "Supplier is required"
                      })}
                    />
                    {errors.supplier && (
                      <div className={classes.error}>
                        {errors.supplier.message}
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      type="text"
                      name="price"
                      variant="outlined"
                      required
                      fullWidth
                      id="price"
                      label="Price"
                      color="secondary"
                      htmlFor="price"
                      autoComplete="price"
                      inputRef={register({
                        required: "You must provide a price",
                        pattern: {
                          value: /^[0-9]\d{0,9}(\.\d{1,3})?%?$/,
                          message: "Please provide a valid price!"
                        }
                      })}
                    />
                    {errors.price && (
                      <div className={classes.error}>
                        {errors.price.message}
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      type="text"
                      name="inStock"
                      variant="outlined"
                      required
                      fullWidth
                      id="inStock"
                      label="In Stock"
                      color="secondary"
                      htmlFor="inStock"
                      autoComplete="inStock"
                      inputRef={register({
                        required: "You must provide the amount of stock",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Please provide a valid stock number"
                        }
                      })}
                    />
                    {errors.inStock && (
                      <div className={classes.error}>
                        {errors.inStock.message}
                      </div>
                    )}
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl
                      variant="outlined"
                      className={classes.createControl}
                    >
                      <InputLabel id="status-select-label">Status</InputLabel>
                      <Controller
                        as={
                          <Select
                            labelId="status-select-label"
                            id="status-select-outlined"
                            label="Status"
                            color="secondary"
                          >
                            <MenuItem value={"available"}>available</MenuItem>
                            <MenuItem value={"delayed"}>delayed</MenuItem>
                            <MenuItem value={"backordered"}>
                              backordered
                            </MenuItem>
                            <MenuItem value={"discontinued"}>
                              discontinued
                            </MenuItem>
                          </Select>
                        }
                        name="status"
                        control={control}
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

export default CreateDialog;
