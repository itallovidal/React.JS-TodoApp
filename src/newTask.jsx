import React from 'react';

const NewTask = () => {
    return (
        <article className='fade-in' id='container_newTask'>
            <h1>Adicionar Tarefa</h1>

            <section>
                <h2>Nome da Tarefa</h2>
                <input type='text' placeholder='estudar, ir ao mercado..'/>
                <textarea placeholder='Descreva um pouco sobre sua tarefa..'/>
            </section>

            <section>
                <h3>Data Limite</h3>

                <div>
                    <input id='customData' type="date"/>
                    <button className='btn'>Hoje</button>
                    <button className='btn'>1 dia</button>
                    <button className='btn'>1 semana</button>
                </div>
            </section>

            <section>
                <h3>Categoria</h3>

                <div>
                    <button className='btn'>Casa</button>
                    <button className='btn'>Lazer</button>
                    <button className='btn'>Trabalho</button>
                    <button className='btn'>Estudo</button>
                </div>
            </section>

            <button className='btn' id='btn_addTask'>Adicionar Tarefa!</button>
        </article>
    );
};

export default NewTask;