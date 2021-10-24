import { useState, useEffect } from "react";
import {
  Container,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  VStack
} from "@chakra-ui/react";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, signin } from "./reducers/auth";

const Auth = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  let history = useHistory();
  const { state } = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    if (user) {
      history.push(state?.from || "/");
    }
  }, [user, history]);

  const handleSignin = () => dispatch(signin(email, password));
  const handleRegister = () => dispatch(register(email, password));

  return (
    <Container>
      <VStack pt={4} spacing={4}>
        <Input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Switch>
          <Route path="/signin">
            <Button onClick={handleSignin}>Signin</Button>
          </Route>
          <Route path="/register">
            <Button onClick={handleRegister}>Register</Button>
          </Route>
        </Switch>
      </VStack>
    </Container>
  );
};

export default Auth;
