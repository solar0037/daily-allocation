"use client"
import styles from "@/app/styles/task.module.css";

interface ITaskProps {
    title: string;
    done: boolean;
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeButton: (e: React.ChangeEvent<HTMLButtonElement>) => void;
}

export default function Task({ title, done, onChangeInput, onChangeButton }: ITaskProps) {
    return <li className={styles.container}>
        <input type="checkbox" name="taskCheckbox" checked={done} onChange={onChangeInput}></input>
        <span className={styles.title}>{title}</span>
        <button className={styles.delete} onChange={onChangeButton}>삭제</button>
    </li>
};
