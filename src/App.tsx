import styles from "./App.module.css";
import { useState, ChangeEvent, FormEvent } from "react";
import { Header } from "./components/Header";
import { CreateTaskForm } from "./components/CreateTaskForm";
import { TaskList } from "./components/TaskList";

export interface TaskInterface {
  description: string;
  completed: boolean;
}

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState<TaskInterface[]>([]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    if (newTask.length > 0) {
      setTaskList((currenState) => [...currenState, { description: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function handleCheckBox(taskIndex: number) {
    setTaskList((currentState) => {
      const newState = currentState.map((task, index) => {
        if (index === taskIndex) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
      return newState;
    });
  }

  function handleDeleteTask(taskIndex: number) {
    setTaskList((curretState) => curretState.filter((_, index) => index !== taskIndex));
  }

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <CreateTaskForm inputValue={newTask} onInputChange={handleInputChange} onSubmitTask={handleCreateTask} />
        <TaskList list={taskList} onCheckBoxClick={handleCheckBox} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
}

export default App;
