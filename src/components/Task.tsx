import { Trash } from 'phosphor-react';
import styles from './Tasks.module.css';
import { ITask } from '../App';

export interface TaskProps {
    task: ITask;
    onChangeStatus: (taskId: string) => void;
    onDelete: (taskId: string) => void;
};

export const Task = ({ task, onChangeStatus, onDelete }: TaskProps) => {

    return (
        <>
            <section className={styles.tasks}>
                    <div className={styles.main}>
                        <label className={styles.checkbox} >
                            <input
                                type="checkbox"
                                name="done"
                                onClick={() => onChangeStatus(task.id)}
                            />
                            <span className={styles.span}></span>
                         </label>

                        <p>
                            {task.title}
                        </p>

                        <Trash 
                            size={24}
                            className={styles.trashIcon}
                            onClick={() => onDelete(task.id)}
                        />
                    </div>
            </section>
        </> 
    )
};
