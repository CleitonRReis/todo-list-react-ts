import { ITask } from '../App';
import styles from './HeaderTasks.module.css';
import { Task } from './Task';
// import { ChangeEvent, FormEvent, useState } from 'react';

interface PropsTasks {
    tasks: ITask[];
};

export const HeaderTasks = ({ tasks }: PropsTasks) => {
    const tasksQuantity = tasks.length;
    const doneTasks = tasks.filter(task => task.done).length;

    return (
        <>
            <header className={styles.headerFollowUp}>
            <div className={styles.followUp}>
                <p className={styles.createdTask}>Created tasks <span className={styles.spanCreated}>{tasksQuantity}</span></p>
                <p className={styles.done}>Done <span className={styles.spanDone}>{doneTasks} de {tasksQuantity}</span></p>
            </div>
            </header>

            {
                tasks.map(task => (
                    <Task key={task.id} task={task} />
                ))
            }
        </>
    )
};
