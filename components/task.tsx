"use client"
import styles from "@/app/styles/task.module.css";

interface ITaskProps {
    title: string;
    done: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Task({ title, done, onChange, onClick }: ITaskProps) {
    return <li className={styles.container}>
        <input type="checkbox" name="taskCheckbox" checked={done} onChange={onChange}></input>
        <span className={styles.title}>{title}</span>
        <button className={styles.delete} onClick={onClick}>삭제</button>
    </li>
};
