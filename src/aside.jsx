import React from 'react';



const Aside = ({changePage})=> {
    const [navbarStatus, setNavbarStatus] = React.useState(false)

    React.useEffect(()=>{
        const btns = document.querySelectorAll('button')
        btns.forEach((btn)=>{
            btn.addEventListener('click', ()=>{
                console.log('fire')
                const nav = document.querySelector('nav')
                if(nav.classList.contains('showNav')){
                    nav.classList.remove('showNav')
                }
            })
        })
    }, [])

    return (
        <aside id='container_aside'>
            <div id='container_mobile'>
                <button onClick={()=> setNavbarStatus(!navbarStatus)}>
                    <i className="fa-solid fa-bars"></i>
                </button>

                <h1>{'ToDo'}</h1>
            </div>
            <nav className={`fade-in ${navbarStatus === true ? 'showNav' : null}`}>
                <h1> {'ToDo'} </h1>

                <section>
                    <button className={navbarStatus === true ? 'showBtnClose' : null} onClick={()=> setNavbarStatus(!navbarStatus)} id='btn-closeNav'>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
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