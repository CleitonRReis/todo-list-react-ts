import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { HeaderTasks } from './components/HeaderTasks';

import './global.css';
import styles from './App.module.css';
import { ChangeEvent, useState } from 'react';

export interface ITask {
  id: string;
  title: string;
  done: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState('');
  
  const handleTask = () => {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: newTask,
        done: false
      }
    ]);
    setNewTask('');
  };

  const handleNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    const createNewTask = e.target.value;
    setNewTask(createNewTask);
  };

  const handleStatusTask = (taskId: string) => {
    const newStatusTask = tasks.map(task => {

      if (taskId === task.id) {
        return {
          ...task,
          done: !task.done
        };
      };

      return task;
    });

    setTasks(newStatusTask);
  };

  const deleteTask = (taskIdDeleted: string) => {
    const newTaskWithoutDeletedOne = tasks.filter(taskId => {
      return taskId.id !== taskIdDeleted;
    });

    setTasks(newTaskWithoutDeletedOne);
  };

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleTask} className={styles.input}>
          <input
            type='text' 
            name='task'
            placeholder='New task'
            value={newTask}
            onChange={handleNewTask}
          />
          <div className={styles.btn}>
            <button type='submit'>Add</button>
            <PlusCircle size={20} />
          </div>
        </form>

        <HeaderTasks 
          tasks={tasks}
          onChangeStatus={handleStatusTask}
          onDelete={deleteTask}
        />
      </div>
    </>
  )
};
