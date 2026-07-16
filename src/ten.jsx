
import React, { useEffect, useState } from "react";

function Login() {
  const [name, setName] = useState(true);

  useEffect(() => {
    
    console.log("Welcome to Mounting Phase");
  }, [name]);
  function handleclick(){
    setName (!name);
  }

  return (
    <div>
      <h1 style={{color:'red' ,backgroundColor:"black"}}>Logout</h1>
      <p>Name: {name.toString()}</p>
      <button onClick={handleclick}>change msg</button>
    </div>
  );
}

export default Login;