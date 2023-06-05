import React from 'react';

const Aside = ({attPag, setCategoryFilter, setSearch, setCompletedFilter })=> {
    return (
        <aside>
            <nav className='fade-in'>
            <h1> {'ToDo'} </h1>

                <section>
                    <button onClick={()=> attPag(1)}>Criar Tarefa <i className="fa-solid fa-plus"></i></button>
                    <button>Home</button>
                </section>
                <section>
                    <button onClick={()=>{
                        attPag(3)
                        setCategoryFilter(null)
                        setSearch(null)
                        setCompletedFilter(true)
                    }}>Concluídas</button>
                    <button onClick={()=> {
                        attPag(3)
                        setCategoryFilter(null)
                        setSearch(null)
                        setCompletedFilter(null)
                    }}>Lista de Tarefas</button>
                </section>

                <section>
                    <button onClick={()=>{
                        attPag(3)
                        setCategoryFilter('Casa')
                        setSearch(null)
                        setCompletedFilter(null)
                    }}>Casa</button>

                    <button onClick={()=>{
                        attPag(3)
                        setCategoryFilter('Trabalho')
                        setSearch(null)
                        setCompletedFilter(null)
                    }}>Trabalho</button>

                    <button onClick={()=>{
                        attPag(3)
                        setCategoryFilter('Estudo')
                        setSearch(null)
                        setCompletedFilter(null)
                    }}>Estudo</button>

                    <button onClick={()=>{
                        attPag(3)
                        setCategoryFilter('Lazer')
                        setSearch(null)
                        setCompletedFilter(null)
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