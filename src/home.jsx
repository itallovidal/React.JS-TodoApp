import React from 'react';
import { Chart, registerables} from 'chart.js';
Chart.register(...registerables);
Chart.defaults.color = 'white';

function chart01Config(){
    const tasks = JSON.parse(localStorage.getItem('tasks'))

    if(tasks !== null){
        const completed = tasks.filter((task)=>{
            return task.completed === true
        })

        const pending = tasks.filter((task)=>{
            return task.completed === false
        })


        const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Total', 'Concluídas', 'Pendentes'],
                datasets: [{
                    label: '',

                    data: [tasks.length, completed.length, pending.length],
                    borderWidth: 1,
                    backgroundColor: [
                        '#F45050',
                        'rgb(255,255,255)',
                        'rgb(255,255,255)',
                    ],
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    }
}

function chart02Config(){
    const tasks = JSON.parse(localStorage.getItem('tasks'))

    if(tasks !== null){
        const homeTasks = tasks.filter((task)=>{
            return task.taskCategory === 'Casa'
        })

        const studyTasks = tasks.filter((task)=>{
            return task.taskCategory === 'Estudo'
        })

        const workTasks = tasks.filter((task)=>{
            return task.taskCategory === 'Trabalho'
        })
        const funTasks = tasks.filter((task)=>{
            return task.taskCategory === 'Lazer'
        })

        const ctx = document.getElementById('myChart2');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Casa', 'Estudo', 'Trabalho', 'Lazer'],
                datasets: [{
                    label: '',
                    data: [
                            homeTasks.length,
                            studyTasks.length,
                            workTasks.length,
                            funTasks.length
                    ],
                    borderWidth: 1,

                }]
            },
            options: {
                colors: 'black',
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

    }
}
function Home({changePage}) {
    React.useEffect(()=>{
        chart01Config()
        chart02Config()
    }, [])


    function getTasks(filter = null)
    {
        let el = []
        let tasks = JSON.parse(localStorage.getItem('tasks'))


        if(tasks !== null){
            if(filter !== null){
                tasks =  tasks.filter((task)=>{
                    return task.taskCategory === filter
                })
            }

            let loopLimit  = tasks.length > 3 ? 3 : tasks.length - 1
            for(let i = loopLimit; i >= 0 ; i--){
                el.push(<div key={i} className={'task ' + tasks[i].taskCategory}>
                    <h3>{tasks[i].taskName}</h3>
                    <div className='footer'>
                        <span>{tasks[i].taskCategory}</span>
                        <button onClick={()=>{
                            changePage(3)
                        }} className="fas fa-chevron-right"></button>
                    </div>
                </div>)
            }

            return el
        }
        else{
            return <p>Sem Tarefas.</p>
        }
    }

    return (
        <main id="container_home">
            <h1>Olá, {localStorage.getItem('userName')}
                <p>O que temos para hoje?</p>
            </h1>

            <article id="container_01">
                <section id='container_lastTasks'>
                    <h2>Últimas tarefas</h2>
                    <div className='container_tasks'>
                        { getTasks() }
                    </div>
                </section>
                <section id='container_chartPie'>
                    <canvas  id="myChart2"></canvas>
                </section>
            </article>

            <article id='container_02'>
                <section id='container_chartBar'>
                    <canvas id="myChart"></canvas>
                </section>
            </article>

            <article className='wrapper' id="container_03">
                <section id='container_HomeTasks'>
                    <h2>Tarefas de Casa</h2>
                    <div className='container_tasks'>
                        { getTasks('Casa') }
                    </div>
                </section>
            </article>

            <article className='wrapper' id="container_04">
                <section id='container_JobTasks'>
                    <h2>Tarefas de Trabalho</h2>
                    <div className='container_tasks'>
                        { getTasks('Lazer') }
                    </div>
                </section>
            </article>

            <article className='wrapper' id="container_05">
                <section id='container_StudyTasks'>
                    <h2>Tarefas de Estudo</h2>
                    <div className='container_tasks'>
                        { getTasks('Estudo') }
                    </div>
                </section>
            </article>
        </main>
    )
}



export default Home;