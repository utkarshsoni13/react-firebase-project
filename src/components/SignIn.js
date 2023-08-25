import React from "react";
import { useState } from "react";
import { sighInWithGoogle } from "../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import Tab from '@material-ui/core/Tab';
import { Box } from "@mui/material";
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

function SignIn() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      setRegisterEmail("");
      setRegisterPassword("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      setLoginEmail("");
      setLoginPassword("");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  const [value, setValue] = useState("2");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <body className="bg">
    <div className="bg">
      <div className="container pt-5 textcol">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }} className="d-flex justify-content-center" >
          <TabList onChange={handleChange} aria-label="lab API tabs example" >
            <Tab label="Sign Up" value="1" />
            <Tab label="Sign In" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <h3 className="text-center"> Register User </h3>
          <div className="container">
          <div className="row justify-content-center ">
          <div className="col-md-6 text-center ">
          <input
                className="form-control mb-3"
                type="email"
                placeholder="Email"
                onChange={(event) => {
                  setRegisterEmail(event.target.value);
                }}/>
          </div>
          </div>
          <div className="row justify-content-center ">
          <div className="col-md-6 text-center ">
            <input
            className="form-control mb-3"
                type="password"
                placeholder="Password"
                onChange={(event) => {
                  setRegisterPassword(event.target.value);
                }}
              />
          </div>
        </div>
        <div className="col-12 text-center ">
        <button className="btn btn-outline-secondary" onClick={register}> Create User</button>

        </div>


        </div></TabPanel>
        <TabPanel   value="2"><h3 className="text-center ">Login </h3>
          <div className="container logGoogleBorder ">
          <div className="row justify-content-center ">
          <div className="col-md-6 text-center ">
          <input
          className="form-control mb-3"
              type="email"
              placeholder="Email"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
          </div>
          </div>
          <div className="row justify-content-center ">
          <div className="col-md-6 text-center ">
          <input className="form-control mb-3"
              type="password"
              placeholder="Password"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-12 text-center " style={{borderBottom:`1px solid white`}}>
              
        <button className="btn btn-outline-secondary mb-3"  onClick={login}> Login</button>
        </div>
        <div className="row align-items-center">
          
          <div className="col-12 text-center  ">
            <button
              className="login-with-google-btn mt-5 py-2 "
              onClick={sighInWithGoogle}
            >
              Sign In With Google
            </button>
          </div>
        </div>


        </div></TabPanel>
      </TabContext>

      
    </div>
    </div>
    </body>
  );
}

export default SignIn;
