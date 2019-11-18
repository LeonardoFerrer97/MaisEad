import React from "react";

const NavBar = (props) => {
  return (
    <div>
      {!props.auth.isAuthenticated() ?
        <button
          onClick={() => {
            props.auth.login()
          }
          }
        >
          Log in
        </button>
        : <button onClick={() => props.auth.logout()}>Log out</button>}
    </div>
  );
};



export default NavBar;