import React from 'react';

function openDesc(e){
    e.target.classList.toggle('rotate')
    const p = e.target.parentNode.previousSibling.previousSibling
    p.parentNode.style.cssText = `--tam-p: ${p.innerText.length}`
    p.classList.toggle('changeHeight')
}

function changeTaskStatus(tasks, el, ){
    const name = el.previousSibling.previousSibling.innerText

    tasks.forEach((task)=>{
        console.log(task.taskName)

        if(task.taskName === name){
            console.log('acho!')
            task.completed = !task.completed
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks) )
}

const Tasks = ({ categoryFilter, searchFilter, setSearch, completedFilter }) =>{
    const [taskStatus, setTaskStatus] = React.useState(false)
    let tasks = localStorage.getItem('tasks')

    function showTasks(tasks, categoryFilter = null, searchFilter = null){

        if(categoryFilter !== null) {
            tasks = tasks.filter((task)=>{
                return task.taskCategory === categoryFilter
            })
        }

        if(searchFilter !== null){
            tasks = tasks.filter((task)=>{
                return task.taskName === searchFilter
            })
        }

        if(completedFilter !== null){
            tasks = tasks.filter((task)=>{
                return task.completed === true
            })
        }

        return (
            tasks.map((task, i)=>{
                return <div key={i} className='task'>
                    <h3> {task.taskName} </h3>

                    <p>{task.taskDesc} <br/> <br/> Data Limite:  <span style={{color: '#F45050', fontWeight: 'Bolder'}} className='taskLimitDate'> {task.taskTime}</span></p>
                    <button onClick={(e)=>{
                        changeTaskStatus(tasks, e.target)
                        setTaskStatus(!taskStatus)

                    }}  className={`btn ${task.completed && 'completed fa-solid fa-circle-check'}`  }>
                        {task.completed === true ? null : "Completar" }
                    </button>
                    <div className='footer'>
                        <span>{task.taskCategory}</span>
                        <button className='fas fa-chevron-down' onClick={(e)=>{openDesc(e)}}></button>
                    </div>
                </div>
            })
        )
    }

    let filtro = categoryFilter !== null ? categoryFilter : 'Sem filtro'
    filtro = completedFilter !== null ? 'Tarefas Concluídas' : filtro

    if(tasks !== null) {
        tasks = JSON.parse(tasks)

        return (
            <main id='container_tasks'>
                <h1>Tarefas</h1>

                <article id='container_filter'>
                    <p> Filtro: <span style={{color: '#F45050', fontWeight: 'Bolder'}}> {filtro}</span> </p>
                    <div>
                        <input id='searchBar' placeholder='Pesquise sua tarefa' type="text"/>
                        <button onClick={()=>{
                            setSearch(document.querySelector('#searchBar').value)
                        }}><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </article>

                <article id='container_taskResult'>
                    {showTasks(tasks, categoryFilter, searchFilter)}
                </article>
            </main>
        )
    }
    else{
        return <p> Ops, sem Tarefas. <br/> <br/> Adicione uma tarefa na aba de <strong style={{color: "#F45050"}}> criar tarefas  </strong>.</p>
    }
}

export default Tasks;

