import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { HeaderTasks } from './components/HeaderTasks'
// import { Task } from './components/Task';

// import clipBoard from './assets/Clipboard.svg';

import './global.css';
import styles from './App.module.css';
import { ChangeEvent, FormEvent, /*FormEvent,*/ useState } from 'react';

export interface ITask {
  id: string;
  title: string;
  done: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    // {
      // id: '1',
      // title: 'Teste',
      // done: false
    // }
  ]);
  const [newTask, setNewTask] = useState('');

  const handleTask = (titleTask: string) => {
    event.preventDefault();

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: titleTask,
        done: false
      }
    ]);
    setNewTask('');
  };

  const handleNewTask = (e: ChangeEvent<HTMLInputElement>) => {
    const createNewTask = e.target.value;
    setNewTask(createNewTask);
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
          // countTasks={countTasks}
          // checkStatus={checkStatus}
        />

        {/* <Task 
          task={tasks}
        /> */}

        {/* <section className={tasks.length === 0 ? styles.tasksArea : styles.hide}>
          <img src={clipBoard} alt="Clipboard" />
          <p className={styles.firstPInTasksArea}>You don't have tasks registered yet</p>
          <p>Create tasks and organize your to-do items</p>           
        </section> */}
        
       
      </div>
    </>
  )
};
