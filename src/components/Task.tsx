import { useState } from 'react';
import { Trash } from 'phosphor-react';

import styles from './Tasks.module.css';
import { ITask } from '../App';

export interface TaskProps {
    task: ITask;
};

export const Task = ({ task }: TaskProps) => {
    // const [isChecked, setIsChecked] = useState(done);

    return (
        <>
            <section className={styles.tasks}>
                    <div className={styles.main}>
                        <label className={styles.checkbox} >
                            <input
                                type="checkbox"
                                name="done"
                                // checked={isChecked}
                                // onChange={e => setIsChecked(e.target.checked)}
                            />
                            <span className={styles.span}></span>
                         </label>

                        <p>
                            {task.title}
                        </p>

                        <Trash size={24} className={styles.trashIcon} />
                    </div>
            </section>
        </> 
    )
};
