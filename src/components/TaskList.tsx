import styles from "./TaskList.module.css";
import clipboard from "../assets/img/clipboard.svg";
import { TaskInterface } from "../App";
import { Task } from "./Task";

interface TaskListProps {
  list: TaskInterface[];
  onCheckBoxClick: (taskIndex: number) => void;
  onDeleteTask: (taskIndex: number) => void;
}

export function TaskList({ list, onCheckBoxClick, onDeleteTask }: TaskListProps) {
  const completedTasks = list.reduce((ac, task) => {
    if (task.completed) {
      return (ac += 1);
    }
    return ac;
  }, 0);

  return (
    <main className={styles.taskList}>
      <header>
        <div className={styles.createdTaskCount}>
          <span>Tarefas criadas</span>
          <span>{list.length}</span>
        </div>
        <div className={styles.completedTaskCount}>
          <span>Concluídas</span>
          <span>{completedTasks <= 0 ? "0" : `${completedTasks} de ${list.length}`}</span>
        </div>
      </header>
      <ul className={styles.content}>
        {list.length > 0 ? (
          list.map((task, index) => (
            <Task
              key={task.id}
              data={task}
              taskIndex={index}
              onCheckBoxClick={onCheckBoxClick}
              onDeleteTask={onDeleteTask}
            />
          ))
        ) : (
          <li className={styles.noTaskFoundBox}>
            <img src={clipboard} alt="Imagem de uma prancheta" />
            <span>Você ainda não tem tarefas cadastradas</span>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </li>
        )}
      </ul>
    </main>
  );
}
