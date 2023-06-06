import React from "react";
import Aside from "./aside.jsx";
import Welcome from "./welcome.jsx";
import NewTask from "./newTask.jsx";
import Profile from "./profile.jsx";
import Tasks from "./tasks.jsx";
import Home from "./home.jsx";



function checkUser(){
  return localStorage.getItem('userName')
}

function App() {
    const [state, setState] = React.useState(null)
    const [categoryFilter, setCategoryFilter] = React.useState(null)
    const [searchFilter, setSearch] = React.useState(null)
    const [completedFilter, setCompletedFilter] = React.useState(null)
    const changePage = function (
        pag,
        category = null,
        search = null,
        completed = null){
        setState(pag)
        setCategoryFilter(category)
        setSearch(search)
        setCompletedFilter(completed)
    }

    const filters = {
        categoryFilter,
        searchFilter,
        completedFilter
    }

    const pages = [
        <Welcome attPag={setState}/>,
        <NewTask attPag={setState}/>,
        <Profile/>,
        <Tasks filters={filters} setSearch={setSearch} />,
        <Home changePage={changePage}/>
    ]

    React.useEffect(()=>{
        if(checkUser() !== null){
            setState(4)
        }
        else{
            setState(0)
        }
    }, [])

    return (
        <>
            {state > 0 ? <Aside changePage={changePage}/> : null}
            {pages[state]}
        </>
    )
}

export default App
