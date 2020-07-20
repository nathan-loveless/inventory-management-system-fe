import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import Portal from "./Portal/Portal";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRoute";
import theme from "./materialui/theme";
import Home from "./Home/Home";
import Header from "./Header/Header";
import RegSuccessful from "./RegisterForm/RegSuccessful";
import RegUnsuccessful from "./RegisterForm/RegUnsuccessful";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/regsuccessful" component={RegSuccessful} />
          <Route exact path="/regunsuccessful" component={RegUnsuccessful} />
          <PrivateRoute exact path="/portal" component={Portal} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
