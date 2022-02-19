import React from "react";
import Login from "./Login";

let isLoggedIn = false;
let currentTime = new Date().getHours();
// console.log(currentTime);

function App() {
  return (
    <div className="container">
      {
        isLoggedIn ?
        <div>
          <h1>Hello User</h1>
          {currentTime >= 20 && <h1>Why are you still working? Have some rest.</h1>}
        </div>
        :
        <div>
          <h1>Hello</h1>
          <Login />
          {currentTime >= 20 && <h1>Why are you still working? Have some rest.</h1>}
        </div>
      }
    </div>
  );
}

export default App;
