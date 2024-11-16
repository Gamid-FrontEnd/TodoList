import { useState } from "react";
import { useAppDispatch } from "../../store/hooks.redux";
import { addTodoAsync } from "../../store/todoSlice";
import {
  CreateButton,
  CreateTodoFrom,
  TodoInput,
} from "../../styles/CreateTodoStyles";

const CreateTodoItem = () => {
  const dispatch = useAppDispatch();
  const [newTodo, setNewTodo] = useState<string>("");
  const [newTodoDate, setNewTodoDate] = useState<Date>(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodoAsync({ todo: newTodo, isDone: false, when: newTodoDate }));

    setNewTodo("");
    setNewTodoDate(new Date());
  };
  return (
    <CreateTodoFrom onSubmit={handleSubmit}>
      <div>
        <TodoInput
          type="text"
          placeholder="Write your todo..."
          maxLength={40}
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={new Date(newTodoDate).toISOString().slice(0, 16)}
          onChange={(e) => {
            const date = new Date(e.target.value);
            setNewTodoDate(date);
          }}
        />
      </div>
      <CreateButton type="submit" value="Create Todo" />
    </CreateTodoFrom>
  );
};

export default CreateTodoItem;
