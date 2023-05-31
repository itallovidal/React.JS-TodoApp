import React from "react";
import Aside from "./aside.jsx";
import Welcome from "./Welcome.jsx";
import NewTask from "./newTask.jsx";

function checkUser(){
  return localStorage.getItem('userName')
}

function App() {
  const [state, setState] = React.useState(0)

  if(checkUser()){
      return (
        <>
            <Aside/>
            <NewTask/>
        </>
        )
    }else{
      return <Welcome attPag={setState}/>
    }
}

export default App
