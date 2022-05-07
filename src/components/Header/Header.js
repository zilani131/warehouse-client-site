import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h1>This is header</h1>
      <h2>{user?.displayName}</h2>
      <h3>{user?.email}</h3>
      <Link to="/home">Home</Link>
      {user ? (
        <span>
          <button onClick={() => signOut(auth)}>Sign out</button>
          <Link to="/manageInventory">Manage item</Link>
          <Link to ="/addNewItem">Add item</Link>
          <Link to ="/myitem">My item</Link>
        </span>
      ) : (
        <Link to="/login">Log in</Link>
      )}
    </div>
  );
};

export default Header;
