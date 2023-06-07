import React, {useEffect} from 'react';

function deleteTasks(filter, setMsg){
    if(filter === null && localStorage.getItem('tasks')){
        localStorage.removeItem('tasks')
        setMsg(true)

    }
    else if(localStorage.getItem('tasks')){
        let tasks = JSON.parse(localStorage.getItem('tasks'))
        let uncompleted = tasks.filter((task)=>{
            return task.completed === false
        })

        localStorage.removeItem('tasks')
        localStorage.setItem('tasks', JSON.stringify(uncompleted))
        setMsg(true)
    }
}

const Profile = () =>{
    const [msg, setMsg] = React.useState(false)

    React.useEffect(()=>{
        if(msg){
            const containerMsg = document.querySelector('#container_msg')
            containerMsg.addEventListener('animationend', ()=> containerMsg.remove())
        }
    },[msg])

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
                    deleteTasks(null, setMsg)
                }} className='btn'>Apagar</button>

                <p>Apagar Tarefas Completadas</p>
                <button onClick={()=>{
                    deleteTasks(1, setMsg)
                }} className='btn'>Apagar</button>
            </article>

            {msg && <span id='container_msg'>Ação concluída com sucesso!</span> }
        </main>
    )
}

export default Profile;