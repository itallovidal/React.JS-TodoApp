import React from 'react';

const Aside = ({attPag, setCategoryFilter, setSearch})=> {
    return (
        <aside>
            <nav className='fade-in'>
            <h1> {'ToDo'} </h1>

                <section>
                    <button onClick={()=> attPag(1)}>Criar Tarefa <i className="fa-solid fa-plus"></i></button>
                    <button>Home</button>
                </section>
                <section>
                    <button>Concluídas</button>
                    <button>Vencidas</button>
                    <button onClick={()=> {
                        attPag(3)
                        setCategoryFilter(null)
                        setSearch(null)
                    }}>Tarefas</button>
                </section>

                <section>
                    <button onClick={()=>{
                        attPag(3)
                        setCategoryFilter('Casa')
                        setSearch(null)
                    }}>Casa</button>

                    <button onClick={()=>{
                        attPag(3)
                        setCategoryFilter('Trabalho')
                        setSearch(null)
                    }}>Trabalho</button>

                    <button onClick={()=>{
                        attPag(3)
                        setCategoryFilter('Estudo')
                        setSearch(null)
                    }}>Estudo</button>

                    <button onClick={()=>{
                        attPag(3)
                        setCategoryFilter('Lazer')
                        setSearch(null)
                    }}>Lazer</button>
                </section>
                <section>
                    <button onClick={()=> attPag(2)}>minha conta</button>
                </section>
            </nav>
        </aside>
    );
};


export default Aside;