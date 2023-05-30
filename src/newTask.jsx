import React from 'react';

const NewTask = () => {
    return (
        <article id='container_newTask'>
            <h1>Adicionar Tarefa</h1>

            <section>
                <h2>Nome da Tarefa</h2>
                <input/>
                <textarea/>
            </section>

            <section>
                <h3>Data Limite</h3>

                <div>
                    <input type="data"/>
                    <button>Hoje</button>
                    <button>1 dia</button>
                    <button>1 semana</button>
                </div>
            </section>

            <section>
                <h3>Categoria</h3>

                <div>
                    <button>Casa</button>
                    <button>Lazer</button>
                    <button>Trabalho</button>
                    <button>Estudo</button>
                </div>
            </section>

            <button>Adicionar Tarefa!</button>
        </article>
    );
};

export default NewTask;