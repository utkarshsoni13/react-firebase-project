import React from "react";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import "../App.css";
import fillform from "./fillform.png";
import {  db } from "../firebase";
import { useState} from "react";
function AddMember() {
  const usersCollectionRef = collection(db, "Members");
  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      Name: newName,
      Age: Number(newAge),
      Branch: newBranch,
      InstaId: newInstaId,
      GithubId: newGithubId,
      profileURL: newProfileURL,
    });
    throw(e)=>{
      console.log(e);
    }
  };
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newBranch, setNewBranch] = useState("");
  const [newInstaId, setNewInstaId] = useState("");
  const [newGithubId, setNewGitHubId] = useState("");
  const [newProfileURL, setNewProfileURL] = useState("");
  return (
    <body className="bg">
      <form>
        <div className="container panel pricing-table">
          <div className="row justify-content-center ">
            <h3>Fill Credentials</h3>
          </div>
          <div className="row justify-content-center ">
            <img src={fillform} style={{ width: "150px" }}></img>
          </div>
          <div className="row justify-content-center ">
            <div className="col-md-6 text-center ">
              <input
                className="m-3 form-control"
                placeholder="Name"
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-6 text-center ">
              <input
                className="m-3 form-control"
                type="number"
                placeholder="Age"
                onChange={(event) => {
                  setNewAge(event.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-md-6 text-center ">
              <input
                className="m-3 form-control"
                type="text"
                id="Branch"
                placeholder="Branch"
                onChange={(event) => {
                  setNewBranch(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-6 text-center ">
              <input
                className="m-3 form-control"
                type="text"
                placeholder="Instagram"
                onChange={(event) => {
                  setNewInstaId(event.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-md-6 text-center  ">
              <input
                className="m-3 form-control"
                type="text"
                placeholder="Github"
                onChange={(event) => {
                  setNewGitHubId(event.target.value);
                }}
                required
              />
            </div>
            <div className="col-md-6 text-center ">
              <input
                className="m-3 form-control"
                type="text"
                placeholder="ProfileURL"
                onChange={(event) => {
                  setNewProfileURL(event.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col text-center my-2">
              <button className="pricing-button" onClick={createUser}>
                Add Member
              </button>
            </div>
          </div>
        </div>
      </form>
      </body>
      
  );
}

export default AddMember;
