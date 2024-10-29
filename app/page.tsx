import TaskContainer from "@/components/taskContainer";
import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
        <TaskContainer />
    </div>
  );
};
