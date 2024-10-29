"use client"
import React, { useEffect, useState } from "react";
import styles from "@/app/styles/task-container.module.css";
import Task from "./task";

interface ITask {
    title: string,
    done: boolean
}

export default function TaskContainer() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState<ITask[]>([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    };

    const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && newTask.trim() !== "") {
            setTasks((prevTasks) => {
                const updatedTasks = prevTasks.concat({ title: newTask, done: false });
                saveTasks(updatedTasks);
                return updatedTasks;
            });
            setNewTask(""); // 입력 필드 초기화
        }
    }

    const updateTasks = (index: number, done: boolean, isDelete: boolean) => {
        if (isDelete) {
            const updatedTasks = tasks.filter((task, idx) =>
                idx !== index
            );
            setTasks(updatedTasks);
        } else {
            const updatedTasks = tasks.map((task, idx) =>
                idx === index ? { ...task, done: done } : task
            );
            setTasks(updatedTasks);
            saveTasks(updatedTasks);
        }
    }

    const saveTasks = (tasksToSave: ITask[]) => {
        localStorage.setItem('tasks', JSON.stringify(tasksToSave));
    }

    const loadTasks = () => {
        const storedTasks = localStorage.getItem('tasks');
        setTasks(storedTasks ? JSON.parse(storedTasks) : []);
    }

    useEffect(() => {
        loadTasks();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>일일할당량: 이거 끝내기 전에는 잠에 들 생각도 마라!</h1>
            <input
                className={styles.add}
                type="text"
                id="taskInput"
                placeholder="노동 추가"
                value={newTask}
                onChange={onChange}
                onKeyUp={onKeyUp}
            />
            <ul className={styles.tasks}>
                {tasks.map((task, index) => (
                    <Task
                        key={index}
                        title={task.title}
                        done={task.done}
                        onChangeInput={(e) => updateTasks(index, e.target.checked, false)}
                        onChangeButton={(e) => updateTasks(index, true, false)}
                    />
                ))}
            </ul>
        </div>
    );
}
