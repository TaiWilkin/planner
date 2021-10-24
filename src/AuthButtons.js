import React from "react";
import { Button, Link as ChakraLink, HStack } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "./reducers/auth";

const AuthButtons = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleSignout = () => dispatch(signout());

  if (user) {
    return (
      <HStack>
        <Button onClick={handleSignout}>Signout</Button>
      </HStack>
    );
  }

  return (
    <HStack>
      <ChakraLink as={Link} to="/register">
        Register
      </ChakraLink>
      <Button as={Link} to="/signin">
        Signin
      </Button>
    </HStack>
  );
};

export default AuthButtons;
