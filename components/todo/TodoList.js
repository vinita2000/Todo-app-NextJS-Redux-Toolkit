import TodoItem from "./TodoItem";
import styles from "../../styles/TodoList.module.css";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList =  useSelector((state)=>state.todos);

  return (
    <div className={styles.todoList}>
      <ul>
        {todoList.map((item) => {
          return (
            <TodoItem
              id={item.id}
              title={item.title}
              completed={item.completed}
              key={item.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
