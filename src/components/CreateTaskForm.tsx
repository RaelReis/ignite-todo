import styles from "./CreateTaskForm.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";

interface CreateTaskForm {
  inputValue: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmitTask: (event: FormEvent) => void;
}

export function CreateTaskForm({ inputValue, onInputChange, onSubmitTask }: CreateTaskForm) {
  return (
    <form className={styles.createTaskForm} onSubmit={onSubmitTask}>
      <input placeholder="Adicione uma nova tarefa" value={inputValue} onChange={onInputChange} />
      <button type="submit">
        Criar
        <PlusCircle size={20} strokeWidth={7} />
      </button>
    </form>
  );
}
