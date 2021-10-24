import { Box, Container, Heading, Flex, Spacer } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "./store";
import Home from "./Home";
import Auth from "./Auth";
import AuthButtons from "./AuthButtons";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Box bg="lightblue" p={2}>
          <Container maxW="container.xl">
            <Flex alignItems="center">
              <Box as="header">
                <Heading as={Link} to="/">
                  Autoplanner
                </Heading>
              </Box>
              <Spacer />
              <AuthButtons />
            </Flex>
          </Container>
          <ToastContainer />
        </Box>
        <Switch>
          <PrivateRoute path="/secret">
            <p>Secret!</p>
          </PrivateRoute>
          <Route path="/signin">
            <Auth />
          </Route>
          <Route path="/register">
            <Auth />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
