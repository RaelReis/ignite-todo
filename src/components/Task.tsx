import { Trash, Check } from "phosphor-react";
import checkBoxTrue from "../assets/img/checkbox_true.svg";
import checkBoxFalse from "../assets/img/checkbox_false.svg";
import styles from "./Task.module.css";
import { TaskInterface } from "../App";

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
      <input type="checkbox" name="checkbox" checked={data.completed} onClick={checkCompleteTask} />
      <p className={`${styles.taskDescription} ${data.completed ? styles.completed : ""}`}>{data.description}</p>
      <button title="deletar" className={styles.trashButton} onClick={deleteTask}>
        <Trash size={20} />
      </button>
    </li>
  );
}
