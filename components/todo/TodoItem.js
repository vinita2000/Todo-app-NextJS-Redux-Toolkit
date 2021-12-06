import "font-awesome/css/font-awesome.min.css";
import { useDispatch } from "react-redux";
import { markTodoDone, deleteTodo } from "../../store/todoSlice";
import styles from "../../styles/TodoItem.module.css";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const checkHandler = () => {
    // console.log("check handler todo item");
    dispatch(markTodoDone({id: id}));
  };

  const deleteHandler = () => {
    // console.log("Delete Handler todo item");
    dispatch(deleteTodo({id: id}))
  };

  return (
    <li className={styles.li}>
      <div className={styles.todoItem} key={id}>
        <div>{title}</div>
      </div>
      <button
        className={styles.checkBtn}
        disabled={completed}
        onClick={checkHandler}
      >
        <i className="fa fa-check-circle fa-3x"></i>
      </button>
      <button className={styles.deleteBtn} onClick={deleteHandler}>
        <i className="fa fa-minus-circle fa-3x"></i>
      </button>
    </li>
  );
};

export default TodoItem;
