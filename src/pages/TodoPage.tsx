import { useEffect, useState } from "react";
import { TodoForm } from "../components/todoForm/TodoForm";
import { ITodoItem } from "../types/todo";
import { TodoList } from "../components/TodoList/TodoList";

export const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const addTodo = (title: string) => {
    const newTodo = {
      title,
      status: false,
      id: Date.now()
    };
    setTodos((prevState) => [newTodo, ...todos]);
  };

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("todo") || "[]"
    ) as ITodoItem[];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const setStatus = (id: number) => {
    const newTodos = todos.filter((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteItem = (id: number) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList setStatus={setStatus} deleteItem={deleteItem} todos={todos} />
    </>
  );
};
