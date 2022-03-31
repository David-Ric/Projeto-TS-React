import React, { useState } from 'react';
//components
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

//css
import styles from './App.module.css';

//Interface
import {ITask} from './interfaces/Task';


function App() {
  //criando lista
  const [taskList, setTasklist] = useState<ITask[]> ([]);
  //update da lista
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null> (null);
  //deletando item lista
  const deleteTask = (id: number) => {
    setTasklist(
      taskList.filter(task =>{
        return task.id !== id;
      })
    );
  };

  //fazer aparecer o modal
  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal")
    if(display){
      modal!.classList.remove("hide");
    } else{
      modal!.classList.add("hide");
    }
  };

  const ediTask = (task: ITask): void =>{
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };
//fazendo o update
  const updateTask = (id: number, title: string, difficulty: number) =>{

    const updateTask: ITask = {id, title, difficulty}

    const updatedItens = taskList.map((task) => {
      return task.id === updateTask.id ? updateTask : task;
    })
    setTasklist(updatedItens);

    hideOrShowModal(false);
  }

  return (
    <div>
      <Modal 
      children={
      <TaskForm 
      btnText='Editar Tarefa' 
      taskList={taskList} 
      task={taskToUpdate}
      handleUpdate={updateTask}
      />
    }
      />
    <Header/>
    <main className={styles.main}>
    <div>
      <h2>O que você vai fazer?</h2>
      <TaskForm 
      btnText="Criar Tarefa" 
      taskList={taskList} 
      setTaskList={setTasklist}/>
    </div>
    <div>
      <h2>Suas tarefas:</h2>
      <TaskList 
      taskList={taskList} 
      handleDelete={deleteTask}
      handleEdit={ediTask}
      />
    </div>
    </main>
    <Footer/>
  </div>
  );
}

export default App;
