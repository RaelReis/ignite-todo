import styles from "./Task.module.css";
import { TaskInterface } from "../App";
import { Trash } from "phosphor-react";
import checkedIcon from "../assets/img/checked_icon.svg";

interface TaskProps {
  data: TaskInterface;
  taskIndex: number;
  onCheckBoxClick: (taskIndex: number) => void;
  onDeleteTask: (taskIndex: number) => void;
}

export function Task({ data, taskIndex, onCheckBoxClick, onDeleteTask }: TaskProps) {
  function checkCompleteTask() {
    onCheckBoxClick(taskIndex);
  }

  function deleteTask() {
    onDeleteTask(taskIndex);
  }

  return (
    <li className={styles.task}>
      <div className={styles.checkBoxWrapper}>
        <input type="checkbox" name="checkbox" checked={data.completed} onChange={checkCompleteTask} />
        <label htmlFor="checkbox" title="checkbox">
          {data.completed && <img src={checkedIcon} alt="Icone de checkbox" />}
        </label>
      </div>
      <p className={`${styles.taskDescription} ${data.completed ? styles.completed : ""}`}>{data.description}</p>
      <button title="deletar" className={styles.trashButton} onClick={deleteTask}>
        <Trash size={20} />
      </button>
    </li>
  );
}
