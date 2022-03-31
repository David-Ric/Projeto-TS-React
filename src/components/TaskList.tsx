import React from 'react'

//interface
import { ITask } from '../interfaces/Task';

//CSS
import stlye from './TaskList.module.css';

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  return (
    <>
        {taskList.length > 0 ?(
          taskList.map((task) =>(
            <div key={task.id} className={stlye.task}>
              <div className={stlye.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div className={stlye.actions}>
                <i className='bi bi-pencil' 
                onClick={() =>{
                  handleEdit(task);
                }}>

                </i>
                <i className='bi bi-trash' 
                    onClick={() => {
                    handleDelete(task.id);
                    }}
                  ></i>
              </div>
            </div>
          ))
        ):(
          <p>Não há tarefas cadastradas!</p>
        )}
    </>
  )
};

export default TaskList;