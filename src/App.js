import "./App.css";
import { db } from "./firebase";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";
import Navbar from "./components/Navbar";
import Members from "./components/Members";
import SignIn from "./components/SignIn";
import AddMember from "./components/AddMember"
import Home from "./components/Home"
function App() {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     const Name=user.displayName;
  //     const createUser2=async ()=>{
  //       await addDoc(usersCollectionRef,{ Name:user.displayName,email:user.email,photoURL:user.photoURL})
  //     }
  //     createUser2()

  //   } else {
  //   }
  // });

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const createUser = async () => {
    await addDoc(usersCollectionRef, { Name: newName, Age: Number(newAge) });
  };
  
  // const createUserThroughGoogle = async () =>{
  //   setNewName(getItem("name"));
  //   setNewProfileUrl(getItem("profilePic"));
  //   await addDoc(usersCollectionRef, {Name:newName, Pic:newProfileUrl});
  // }
  const usersCollectionRef = collection(db, "Members");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);
  const [users, setUsers] = useState([]);
  return (
    <div className="bg"> 
    <Router >
      <Navbar />
      
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Members" element={<Members/>}/>

        <Route path="/SignIn" element={<SignIn/>} />
        <Route path="/AddMember" element={<AddMember/>} />
      </Routes>
      
    </Router>
    </div>
  );
}

export default App;
