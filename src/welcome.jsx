import React from 'react';

const Welcome = () => {
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
                <section>
                    <h2> Bem Vindo!</h2>
                    <p>Como deseja ser chamado?</p>
                    <input/>
                </section>
        </main>

        </>

    );
};

export default Welcome;