import { createSlice } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { toast } from "react-toastify";
import app from "../firebase";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null
  },
  reducers: {
    handleSignin: (state, user) => {
      state.user = user;
      state.error = null;
    },
    handleSignout: state => {
      state.user = null;
      state.error = null;
    }
  }
});

// Action creators are generated for each case reducer function
const { handleSignin, handleSignout } = authSlice.actions;

const auth = getAuth(app);

export const register = (email, password) => dispatch => {
  console.log("!!!", email, password);
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      dispatch(handleSignin(user));
    })
    .catch(error => {
      dispatch(handleSignout());
      toast.error(error.message);
    });
};

export const signin = (email, password) => dispatch => {
  console.log("!!!", email, password);
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      dispatch(handleSignin(user));
    })
    .catch(error => {
      dispatch(handleSignout());
      toast.error(error.message);
    });
};

export const signout = () => dispatch => {
  signOut(auth)
    .then(() => {
      dispatch(handleSignout());
    })
    .catch(error => {
      dispatch(handleSignout());
      toast.error(error.message);
    });
};

export default authSlice.reducer;
