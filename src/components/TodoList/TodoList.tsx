import React from "react";
import { ITodoItem } from "../../types/todo";

interface ITodoListProps {
  todos: ITodoItem[];
  setStatus: (id: number) => void;
  deleteItem: (id: number) => void;
}

export const TodoList: React.FC<ITodoListProps> = ({
  todos,
  setStatus,
  deleteItem
}) => {
  if (todos.length === 0) {
    return <h4 className="center-align">Добавленных задач нет.</h4>;
  }

  const deleteHandler = (event: React.MouseEvent<HTMLElement>, id: number) => {
    event.preventDefault();
    const { confirm } = window;
    const deleteConfirm = confirm("Подтверждате удаление?");
    if (deleteConfirm) deleteItem(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id} className="todo">
            <label>
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => setStatus(todo.id)}
              />
              <span>{todo.title}</span>
              <i
                onClick={(event) => deleteHandler(event, todo.id)}
                className="material-icons red-text"
              >
                Delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
