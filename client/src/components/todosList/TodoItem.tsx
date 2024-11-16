import { useState } from "react";
import { useAppDispatch } from "../../store/hooks.redux";
import { deleteTodoAsync, updateTodoAsync } from "../../store/todoSlice";
import {
  TodoItemButtonsWrap,
  TodoItemContainer,
  TodoItemButton,
  TodoItemText,
  TodoItemDateOutput,
} from "../../styles/TodoItemStyles";
import TodoItemEditPopup from "./TodoItemEditPopup";

interface TodoItemProps {
  todo: { id: string; todo: string; isDone: boolean; when: Date };
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const [isUpdating, setIsUpdating] = useState<boolean>(false);

  const toggleDone = (id: string, isDone: boolean) => {
    dispatch(updateTodoAsync({ id, todoData: { isDone } }));
  };

  return (
    <TodoItemContainer key={todo.id} $isDone={todo.isDone}>
      <TodoItemDateOutput>
        {(() => {
          const date = new Date(todo.when).toLocaleDateString(undefined, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          });
          const time = new Date(todo.when).toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
          });

          return (
            <span>
              <span className="date">{date}</span>{" "}
              <span className="time">{time}</span>
            </span>
          );
        })()}
      </TodoItemDateOutput>
      <TodoItemText>{todo.todo}</TodoItemText>
      <TodoItemButtonsWrap>
        <TodoItemButton onClick={() => toggleDone(todo.id, !todo.isDone)}>
          {todo.isDone ? <p>&#9745;</p> : <p>&#9744;</p>}
        </TodoItemButton>
        <TodoItemButton onClick={() => dispatch(deleteTodoAsync(todo.id))}>
          <p>&#9746;</p>
        </TodoItemButton>
        <TodoItemButton onClick={() => setIsUpdating(true)}>
          <p>&#9998;</p>
        </TodoItemButton>
      </TodoItemButtonsWrap>

      {isUpdating && (
        <TodoItemEditPopup todo={todo} onClose={() => setIsUpdating(false)} />
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;
