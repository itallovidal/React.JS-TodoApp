import React from 'react';

const Welcome = ({attPag}) => {
    console.log(attPag)

    function login(){
        const userName = document.querySelector('#userName').value
        const articles = Array.from(document.querySelectorAll('article'))
        const welcome = document.querySelector('#container_welcome')           
        const login = document.querySelector('#container_login')           
    
        
        if(userName.length > 3){
            console.log('logado')
    
            articles.forEach(article => article.classList.add('fade-out'))
    
            setTimeout(() => {
                welcome.style.width = '25%'
                login.style.width = '75%'
                
                setTimeout(()=>{
                    attPag(1)
                }, 502)
    
            }, 501);
        }
    }


    return (
        <>

        <aside id='container_welcome'>
            <article>
                <h1>ToDo</h1>
                    <p>Seu organizador de Tarefas</p>

                    <picture>
                        <source srcSet='./images/welcomeimg.png'/>
                        <img/>
                        
                    </picture>
            </article>
        </aside>
        <main id='container_login'>
            <article>
                <h2> Bem Vindo!</h2>
                <p>Como deseja ser chamado?</p>
                <input id='userName'/>

                <button onClick={login} className='btn'> <i className='fas fa-chevron-right'></i> </button>
            </article>
        </main>

        </>

    );
};

export default Welcome;