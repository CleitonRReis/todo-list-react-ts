import { ITask } from '../App';
import styles from './HeaderTasks.module.css';
import { Task } from './Task';
import clipBoard from '../assets/Clipboard.svg';

interface PropsTasks {
    tasks: ITask[];
    onChangeStatus: (taskId: string) => void;
    onDelete: (taskId: string) => void;
};

export const HeaderTasks = ({ tasks, onChangeStatus, onDelete }: PropsTasks) => {
    const tasksQuantity = tasks.length;
    const doneTasks = tasks.filter(task => task.done);

    return (
        <>
            <header className={styles.headerFollowUp}>
            <div className={styles.followUp}>
                <p className={styles.createdTask}>Created tasks <span className={styles.spanCreated}>{tasksQuantity}</span></p>
                <p className={styles.done}>Done <span className={styles.spanDone}>{doneTasks.length} of {tasksQuantity}</span></p>
            </div>
            </header>

            {
                tasks.map(task => (
                    <Task 
                        key={task.id}
                        task={task}
                        onChangeStatus={onChangeStatus}
                        onDelete={onDelete}
                    />
                ))
            }

            <section className={tasks.length === 0 ? styles.tasksArea : styles.hide}>
                <img src={clipBoard} alt="Clipboard" />
                <p className={styles.firstPInTasksArea}>You don't have tasks registered yet</p>
                <p>Create tasks and organize your to-do items</p>           
            </section>
        </>
    )
};
