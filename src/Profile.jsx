import React from 'react';

const Profile = () =>{
    return (
        <main id='container_profile'>
            <h1>Conta</h1>

            <article id='container_newName'>
                <label htmlFor="userName">Nome</label>
                <input id='userName' placeholder='Deseja alterar o nome?' type="text"/>
                <button className='btn'>Alterar</button>
            </article>

            <article>
                <p>Apagar Todas as Tarefas</p>
                <button className='btn'>Apagar</button>

                <p>Apagar Tarefas Vencidas</p>
                <button className='btn'>Apagar</button>

                <p>Apagar Tarefas Completadas</p>
                <button className='btn'>Apagar</button>
            </article>
        </main>
    )
}

export default Profile;