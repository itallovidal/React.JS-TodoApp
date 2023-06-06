import React from 'react';

function deleteTasks(filter = null){
    if(filter === null){
        localStorage.removeItem('tasks')
    }
    else{
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        let uncompleted = tasks.filter((task)=>{
            return task.completed === false
        })

        localStorage.removeItem('tasks')
        localStorage.setItem('tasks', JSON.stringify(uncompleted))
    }
}

const Profile = () =>{
    return (
        <main id='container_profile'>
            <h1>Conta</h1>

            <article id='container_newName'>
                <label htmlFor="userName">Nome</label>
                <input id='userName' placeholder='Deseja alterar o nome?' type="text"/>
                <button onClick={()=>{
                    const newName = document.querySelector('#userName').value

                    if(newName.length >= 3){
                        localStorage.setItem('userName', newName)
                    }

                }} className='btn'>Alterar</button>
            </article>

            <article>
                <p>Apagar Todas as Tarefas</p>
                <button onClick={()=>{
                    deleteTasks()
                }} className='btn'>Apagar</button>

                <p>Apagar Tarefas Completadas</p>
                <button onClick={()=>{
                    deleteTasks(1)
                }} className='btn'>Apagar</button>
            </article>
        </main>
    )
}

export default Profile;