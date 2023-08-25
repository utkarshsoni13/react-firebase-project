import React from "react";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
function Members() {
  const deleteUser = async (id) => {
    const userDoc = doc(db, "Members", id);
    await deleteDoc(userDoc);
  };
  const usersCollectionRef = collection(db, "Members");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    
      <div className="bg mt-5 pt-3">
        <h1 className="textcolourteam text-center " style={{fontSize:`6em`}}>OUR TEAM</h1>
        <div className="container mt-5 pt-3">
          <div className="row align-items-end justify-content-center ">
            
    { users.map((user) => {
      return (
    
        <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
      
      <div className="card bg-dark text-white font-link" style={{ width: "18rem",fontSize:`1.1rem` }}>
        <img
          className="card-img-top px-4 py-2"
          src={user.profileURL}
          alt="User Image"
        />
        <div className="card-body">
          <h5 className="card-title text-center py-0">{user.Name}</h5>
        </div>
        <ul className="list-group list-group-flush bg-dark text-white">
          <li className="list-group-item bg-dark text-white">
          Age: {user.Age}
          </li>
          <li className="list-group-item bg-dark text-white">
          Branch: {user.Branch}
          </li>
          <li className="list-group-item bg-dark text-white">
          Insta: {user.InstaId}
          </li>
          <li className="list-group-item bg-dark text-white">
          Github: {user.GithubId}
          </li>
          <li className="list-group-item bg-dark text-white">
          <button
          className="btn btn-outline-danger px-3 py-1"
          onClick={() => {
            deleteUser(user.id);
          } }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </button>
          </li>
        </ul>
      </div>
    </div>
    )})}</div>
    </div></div>
  );
}

export default Members;
