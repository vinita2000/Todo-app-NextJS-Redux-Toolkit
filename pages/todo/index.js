import TotalTodo from "../../components/todo/TotalTodo";
import TodoForm from "../../components/todo/TodoForm";
import TodoList from "../../components/todo/TodoList";

const TodoPage = () => {
  return (
    <div>
      <TotalTodo />
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodoPage;
