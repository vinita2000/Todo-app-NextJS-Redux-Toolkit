import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";
import "font-awesome/css/font-awesome.min.css";
import styles from "../../styles/TodoForm.module.css";

const TodoForm = () => {
  const todoInputRef = useRef();
  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("Todo form submit handler");

    let todoInputText = todoInputRef.current.value;
    todoInputText = todoInputText.trim();
    if (todoInputText){
      todoInputText = todoInputText.charAt(0).toUpperCase() + todoInputText.slice(1).toLowerCase();
      dispatch(addTodo({ title: todoInputText }));
    }
    else{
      // console.log('Empty Todo');
      return;
    }
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add new todo"
        ref={todoInputRef}
        required
      ></input>
      <button>
        <i className="fa fa-plus-circle fa-3x" aria-hidden="true"></i>
      </button>
    </form>
  );
};

export default TodoForm;
