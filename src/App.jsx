import React from "react";
import Aside from "./aside.jsx";
import Welcome from "./Welcome.jsx";
import NewTask from "./newTask.jsx";
import Profile from "./Profile.jsx";

function checkUser(){
  return localStorage.getItem('userName')
}

function App() {
    const [state, setState] = React.useState(null)
    const pages = [
        <Welcome attPag={setState}/>,
        <NewTask attPag={setState}/>,
        <Profile/>,
    ]

    React.useEffect(()=>{
        if(checkUser() !== null){
            setState(1)
        }
        else{
            setState(0)
        }
    }, [])

    return (
        <>
            {state && <Aside/>}
            {pages[state]}
        </>
    )
}

export default App
