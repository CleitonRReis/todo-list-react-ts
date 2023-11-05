import { useState } from 'react';
import { Trash } from 'phosphor-react';

import styles from './Tasks.module.css';

export interface TaskProps {
    nameOfTask: string[];
    done: boolean;
};

export const Task = ({ nameOfTask, done }: TaskProps) => {
    const [isChecked, setIsChecked] = useState(done);

    return (
        <>
            <section className={styles.tasks}>
                    <div className={styles.main}>
                        <label className={styles.checkbox} >
                            <input
                                type="checkbox"
                                name="done"
                                checked={isChecked}
                                onChange={e => setIsChecked(e.target.checked)}
                            />
                            <span className={styles.span}></span>
                         </label>

                        <p>
                            {nameOfTask}
                        </p>

                        <Trash size={24} className={styles.trashIcon} />
                    </div>
            </section>
        </> 
    )
};
