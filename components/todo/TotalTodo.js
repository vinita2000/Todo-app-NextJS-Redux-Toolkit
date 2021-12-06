import { useSelector } from "react-redux";
import styles from "../../styles/TotalTodo.module.css";

const TotalTodo = () => {
  const completedTodos = useSelector((state) =>
    state.todos.filter((todoItem) => todoItem.completed)
  );

  const pendingTodos = useSelector((state) =>
    state.todos.filter((todoItem) => !todoItem.completed)
  );

  return (
    <div className={styles.totalTodo}>
      <button className={styles.checkBtn}>
        <i className="fa fa-check-circle fa-2x">{completedTodos.length}</i>
      </button>
      <button className={styles.pendingBtn}>
        <i className="fa fa-times-circle fa-2x">{pendingTodos.length}</i>
      </button>
    </div>
  );
};

export default TotalTodo;
