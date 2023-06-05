import React from 'react';

function check(){
    const taskName = document.querySelector('#taskName').value

    if(taskName.length < 3){
        return 'Não esqueça o nome da tarefa!'
    }

    const taskDesc = document.querySelector('#taskDesc').value
    if(taskDesc.length < 5){
        return 'Descreva a Tarefa (é pro seu bem)'
    }

    let taskTime = document.querySelector('input[name=taskTime]:checked')
    if(taskTime === null){
        taskTime = document.querySelector('input[name=taskTime]').value

        if(taskTime.length === 0){
            return 'Marque uma data limite!'
        }

    }else{
        taskTime = taskTime.value
    }

    const taskCategory = document.querySelector('input[name=taskCategory]:checked').value
    if(taskCategory === null){
        return 'Marque a categoria, por favor'
    }

    return {taskName, taskDesc, taskTime, taskCategory }
}

const NewTask = ({attPag}) => {
    const [customDate, setCustomDate] = React.useState(false)
    const [errorMsg, setErrorMsg] = React.useState('')

    function addTask(e){
        e.preventDefault()
        const verification = check()

        if (typeof verification ===  "string") {
            setErrorMsg(verification)
        } else {
            if(localStorage.getItem('tasks') !== null){
                let tasks = JSON.parse(localStorage.getItem('tasks'))
                tasks.push(verification)
                localStorage.setItem('tasks', JSON.stringify(tasks))
            }else{
                let tasks = [verification]
                localStorage.setItem('tasks', JSON.stringify(tasks))
            }

            attPag(3)
        }

    }

    function resetDate(){
        const date = document.querySelector('input[name=taskTime]:checked')

        date !== null ? date.checked = false : null
        setCustomDate(true)
    }

    return (
        <form onSubmit={(e)=>addTask(e)} className='fade-in' id='container_newTask'>
            <h1>Adicionar Tarefa</h1>

            <section>
                <h2>Nome da Tarefa</h2>
                <input id='taskName' type='text' placeholder='estudar, ir ao mercado..'/>
                <textarea id='taskDesc' placeholder='Descreva um pouco sobre sua tarefa..'/>
            </section>

            <section>
                <h3>Data Limite</h3>

                <div>
                    <input onChange={resetDate} name='taskTime' id='customData' type="date"/>

                    <input id='time1' name='taskTime' value='Hoje' type='radio' disabled={customDate}/>
                    <label className={`btn ${customDate && 'disabledLabel'}`} htmlFor="time1">Hoje</label>

                    <input id='time2' name='taskTime' value='1 Dia' type='radio' disabled={customDate}/>
                    <label className={`btn ${customDate && 'disabledLabel'}`} htmlFor="time2">1 Dia</label>

                    <input id='time3' name='taskTime' value='1 Semana' type='radio' disabled={customDate}/>
                    <label className={`btn ${customDate && 'disabledLabel'}`} htmlFor="time3">1 Semana</label>
                </div>
            </section>

            <section>
                <h3>Categoria</h3>

                <div>
                    <input id='category1' name='taskCategory' value='Casa' type='radio'/>
                    <label className='btn' htmlFor="category1">Casa</label>

                    <input id='category2' name='taskCategory' value='Lazer' type='radio'/>
                    <label className='btn' htmlFor="category2">Lazer</label>

                    <input id='category3' name='taskCategory' value='Trabalho' type='radio'/>
                    <label className='btn' htmlFor="category3">Trabalho</label>

                    <input id='category4' name='taskCategory' value='Estudo' type='radio'/>
                    <label className='btn' htmlFor="category4">Estudo</label>
                </div>
            </section>

            <button type='submit' className='btn' id='btn_addTask'>Adicionar Tarefa!</button>
            { errorMsg.length < 1 ? null : <p id="errorMsg"> {errorMsg} </p>}

        </form>
    );
};

export default NewTask;