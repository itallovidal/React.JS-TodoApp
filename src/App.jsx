import React from "react";
import Aside from "./aside.jsx";
import Welcome from "./Welcome.jsx";
import NewTask from "./newTask.jsx";
import Profile from "./Profile.jsx";
import Tasks from "./Tasks.jsx";

function checkUser(){
  return localStorage.getItem('userName')
}

function App() {
    const [state, setState] = React.useState(null)
    const [categoryFilter, setCategoryFilter] = React.useState(null)
    const [searchFilter, setSearch] = React.useState(null)

    const pages = [
        <Welcome attPag={setState}/>,
        <NewTask attPag={setState}/>,
        <Profile/>,
        <Tasks categoryFilter={categoryFilter} searchFilter={searchFilter} setSearch={setSearch}/>
    ]

    React.useEffect(()=>{
        if(checkUser() !== null){
            setState(3)
        }
        else{
            setState(0)
        }
    }, [])

    return (
        <>
            {state > 0 ? <Aside setCategoryFilter={setCategoryFilter} attPag={setState} setSearch={setSearch}/> : null}
            {pages[state]}
        </>
    )
}

export default App
