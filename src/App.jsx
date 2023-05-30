import React from "react";
import Aside from "./aside.jsx";
import Welcome from "./Welcome.jsx";
import NewTask from "./newTask.jsx";

function App() {
  const [state, setState] = React.useState(1)

  
  if(state === 0){
   return <Welcome attPag={setState}/>
  }
  else{
    return (
      <>
          <Aside/>
          <NewTask/>
      </>
      )
  }
}

export default App
