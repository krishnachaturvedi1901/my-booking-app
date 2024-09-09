import * as React from "react";
import Button from "@mui/material/Button";
import { styled, useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {
  Alert,
  Box,
  FormHelperText,
  Grid,
  LinearProgress,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { LOADING_ENUMS } from "../../constants/enums";
import ThirdPartyAuth from "./components/ThirdPartyAuth";

// Custom dialog styling
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

// Define the types for the state
interface FormInfo {
  email: string;
  password: string;
}

interface ErrorState {
  emailError: string;
}

// Define props if you are passing them
interface LoginProps {
  loading: LOADING_ENUMS;
  stateError: string | null;
  requestStatus: {
    message: string;
  };
}

const Login: React.FC<LoginProps> = ({
  loading,
  stateError,
  requestStatus,
}) => {
  const theme = useTheme();
  console.log("theme-", theme);
  const [open, setOpen] = React.useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState<boolean>(false);
  const [formInfo, setFormInfo] = React.useState<FormInfo>({
    email: "",
    password: "",
  });
  const [isError, setIsError] = React.useState<boolean>(false);
  const [error, setError] = React.useState<ErrorState>({ emailError: "" });

  // Open dialog handler
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close dialog handler
  const handleClose = () => {
    setOpen(false);
  };

  // Form validation function
  const formValidation = (infoObj: FormInfo): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(infoObj.email)) {
      setIsError(true);
      setError((prevErr) => ({
        ...prevErr,
        emailError: "Enter a valid email",
      }));
      return false;
    } else {
      setIsError(false);
      setError((prevErr) => ({ ...prevErr, emailError: "" }));
    }
    return true;
  };

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setError({ ...error, emailError: "" });
    }
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const filledDataObj: FormInfo = {
      email: data.get("email") as string,
      password: data.get("password") as string,
    };
    console.log("submit called-", filledDataObj);
    const isValid = formValidation(filledDataObj);
    if (isValid) {
      // Dispatch action (can be added here)
    }
  };

  // Snackbar close handler
  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen}>
        Login/Signup
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        sx={{ zIndex: 10000000000000 }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Login/Signup
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box sx={{ width: "100%", my: "20px" }}>
            <Stack
              sx={{ width: { xs: "100%", sm: "50%" }, margin: " 20px auto" }}
            >
              {loading === LOADING_ENUMS.LOAD_FAILED && (
                <Alert severity="error">
                  {stateError || "Error in login, try again"}
                </Alert>
              )}
              {isError && (
                <FormHelperText error={true}>Invalid fields *</FormHelperText>
              )}
              {loading === LOADING_ENUMS.LOAD_PENDING && <LinearProgress />}
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      error={Boolean(error.emailError)}
                      onChange={handleChange}
                    />
                    {error.emailError && (
                      <FormHelperText error>{error.emailError}</FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      disabled={loading === LOADING_ENUMS.LOAD_PENDING}
                      type="submit"
                      sx={{
                        cursor: "pointer",
                        textAlign: "center",
                        borderRadius: 2,
                        fontWeight: 600,
                        margin: "20px 0px",
                        width: "100%",
                        padding: "10px 20px",
                        boxShadow: theme.shadows[1],
                        transition: "0.4s",
                        color: theme.palette.background.contrastdark,
                        backgroundColor: "rgba(255, 255, 255, 1)",
                        border: `1px solid ${theme.palette.background.contrastdark}`,
                        "&:hover": {
                          color: "white",
                          boxShadow: theme.shadows[1],
                          backgroundColor:
                            theme.palette.background.contrastdark,
                        },
                      }}
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
            <ThirdPartyAuth />
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={handleSnackbarClose}
            >
              <Alert
                onClose={handleSnackbarClose}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                {requestStatus?.message}
              </Alert>
            </Snackbar>
          </Box>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default Login;
