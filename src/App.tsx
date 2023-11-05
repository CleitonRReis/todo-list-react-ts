import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { Task } from './components/Task';

import clipBoard from './assets/Clipboard.svg';

import './global.css';
import styles from './App.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

export function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>('');
  const [countTasks, setCountTasks] = useState(0);

  const handleTask = (e: FormEvent) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
  };

  const handleNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    const createNewTask = e.target.value;
    setNewTask(createNewTask);
  };

  const handleCountTask = () => {
    setCountTasks(tasks.length + 1);
  };

  const checkStatus = tasks.filter(task => task.done).length;

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleTask} className={styles.input}>
          <input type='text' name='task' onChange={handleNewTask} placeholder='New task' />
          <div className={styles.btn}>
            <button onClick={handleCountTask} type='submit'>Add</button>
            <PlusCircle size={20} />
          </div>
        </form>

        <header className={styles.headerFollowUp}>
          <div className={styles.followUp}>
            <p className={styles.createdTask}>Created tasks <span className={styles.spanCreated}>{countTasks}</span></p>
            <p className={styles.done}>Done <span className={styles.spanDone}>{checkStatus} de {tasks.length}</span></p>
          </div>
        </header>

        <section className={tasks.length === 0 ? styles.tasksArea : styles.hide}>
          <img src={clipBoard} alt="Clipboard" />
          <p className={styles.firstPInTasksArea}>You don't have tasks registered yet</p>
          <p>Create tasks and organize your to-do items</p>           
        </section>
        
        {
          tasks.length > 0 && tasks.map(task => {
            return (
              <Task
                nameOfTask={task}
                // done={task}
              />
            )
          })
        }
      </div>
    </>
  )
};
