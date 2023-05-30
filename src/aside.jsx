import React from 'react';

const Aside = ()=> {
    return (
        <aside>
            <h1> {'ToDo'} </h1>
            <article>
                <section>
                    <button>Criar Tarefa <i className="fa-solid fa-plus"></i></button>
                    <button>Home</button>
                </section>
                <section>
                    <button>Concluídas</button>
                    <button>Vencidas</button>
                    <button>Tarefas</button>
                </section>

                <section>
                    <button>Casas</button>
                    <button>Trabalho</button>
                    <button>Estudo</button>
                    <button>Lazer</button>
                </section>
                <section>
                    <button>minha conta</button>
                </section>
            </article>
        </aside>
    );
};


export default Aside;