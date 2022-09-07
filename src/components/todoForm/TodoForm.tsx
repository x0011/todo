import React, { ReactElement, useRef, useState } from "react";

interface ITodoFormProps {
  addTodo: (title: string) => void;
}

export const TodoForm: React.FunctionComponent<ITodoFormProps> = ({
  addTodo
}: ITodoFormProps) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setTitle(value);
  };

  const onKeyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.ctrlKey === true) {
      addTodo(title);
      setTitle("");
    }
  };

  return (
    <div className="input-field">
      <input
        onChange={changeHandler}
        type="text"
        id="title"
        value={`${title}`}
        onKeyPress={onKeyPressHandler}
        placeholder="Добавить ctrl+enter"
      />
      <label htmlFor="title" className="active">
        Введите задачу
      </label>
    </div>
  );
};
