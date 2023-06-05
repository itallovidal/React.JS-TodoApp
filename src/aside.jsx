import React from 'react';

const Aside = ({changePage})=> {
    return (
        <aside>
            <nav className='fade-in'>
            <h1> {'ToDo'} </h1>

                <section>
                    <button onClick={()=> changePage(1)}>Criar Tarefa <i className="fa-solid fa-plus"></i></button>
                    <button onClick={()=>{
                        changePage(4, 'Estudo')
                    }}>Home</button>
                </section>
                <section>
                    <button onClick={()=>{
                        changePage(3,null,null,true)

                    }}>Concluídas</button>

                    <button onClick={()=> {
                        changePage(3)
                    }}>Lista de Tarefas</button>
                </section>

                <section>
                    <button onClick={()=>{
                        changePage(3, 'Casa')
                    }}>Casa</button>

                    <button onClick={()=>{
                        changePage(3, 'Trabalho')
                    }}>Trabalho</button>

                    <button onClick={()=>{
                        changePage(3, 'Estudo')
                    }}>Estudo</button>

                    <button onClick={()=>{
                        changePage(3, 'Lazer')
                    }}>Lazer</button>
                </section>
                <section>
                    <button onClick={()=> changePage(2)}>minha conta</button>
                </section>
            </nav>
        </aside>
    );
};


export default Aside;