import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import Portal from "./Portal/Portal";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import theme from "./materialui/theme";
import Home from "./Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <PrivateRoute exact path="/portal" compoent={Portal} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
