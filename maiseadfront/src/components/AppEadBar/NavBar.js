import React from "react";

const NavBar = (props) => {
  return (
    <div>
      {!props.auth.isAuthenticated() ?
        <button
          style ={{backgroundColor:'#910000',color:'white',border:'none',cursor:'pointer'}}
          onClick={() => {
            props.auth.login()
          }
          }
        >

          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line></svg>  Log in
        </button>
        : <button style ={{backgroundColor:'#910000',color:'white',border:'none',cursor:'pointer'}} onClick={() => props.auth.logout()}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>Log out</button>}
    </div>
  );
};



export default NavBar;