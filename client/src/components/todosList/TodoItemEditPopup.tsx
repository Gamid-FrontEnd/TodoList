import { useState } from "react";
import {
  TodoPopupEditButton,
  TodoPopupForm,
  TodoPopupInputDate,
  TodoPopupInputText,
  TodoPopupInputWrap,
} from "../../styles/TodoPopupStyles";
import { useAppDispatch } from "../../store/hooks.redux";
import { updateTodoAsync } from "../../store/todoSlice";
import { TodoItemButton } from "../../styles/TodoItemStyles";

interface TodoItemProps {
  todo: { id: string; todo: string; isDone: boolean; when: Date };
  onClose: () => void;
}

const TodoItemEditPopup: React.FC<TodoItemProps> = ({ todo, onClose }) => {
  const dispatch = useAppDispatch();
  const [textValue, setTextValue] = useState<string>(todo.todo);
  const [dateValue, setDateValue] = useState<Date>(new Date(todo.when));

  const updateTodo = (
    e: React.FormEvent,
    id: string,
    todo: string,
    when: Date
  ) => {
    e.preventDefault();
    dispatch(updateTodoAsync({ id, todoData: { todo, when } }));
    onClose();
  };

  return (
    <TodoPopupForm
      onSubmit={(e) => updateTodo(e, todo.id, textValue, dateValue)}
    >
      <TodoItemButton onClick={onClose}>
        <p>&#10005;</p>
      </TodoItemButton>
      <TodoPopupInputWrap>
        <TodoPopupInputText
          type="text"
          maxLength={40}
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
        />
        <TodoPopupInputDate
          type="datetime-local"
          value={new Date(
            dateValue.getTime() - dateValue.getTimezoneOffset() * 60000
          )
            .toISOString()
            .slice(0, 16)}
          onChange={(e) => setDateValue(new Date(e.target.value))}
        />
      </TodoPopupInputWrap>
      <TodoPopupEditButton type="submit" value="Submit changes" />
    </TodoPopupForm>
  );
};

export default TodoItemEditPopup;
