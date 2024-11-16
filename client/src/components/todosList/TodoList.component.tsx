import { useState } from "react";
import { useAppSelector } from "../../store/hooks.redux";
import TodoItem from "./TodoItem";
import {
  DateSortButton,
  SearchInput,
  SortingWrap,
  TodoListContainer,
  TodoListWrap,
} from "../../styles/TodoListStyles";
import CreateTodoItem from "./CreateTodoItem";

const TodoList = () => {
  const allTodosList = useAppSelector((state) => state.todos.todos);

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const filteredTodos = allTodosList.filter((todo) =>
    todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedTodos = filteredTodos.sort((a, b) => {
    const dateA = new Date(a.when).getTime();
    const dateB = new Date(b.when).getTime();

    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <TodoListWrap>
      <SortingWrap>
        <div>
          <SearchInput
            type="text"
            placeholder="Search todos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div>
          <DateSortButton
            onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            Sort by Date ({sortOrder === "asc" ? "asc" : "desc"})
          </DateSortButton>
        </div>
      </SortingWrap>
      <TodoListContainer>
        {sortedTodos.length > 0 ? (
          sortedTodos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })
        ) : (
          <p>No todos found</p>
        )}
      </TodoListContainer>

      <CreateTodoItem />
    </TodoListWrap>
  );
};

export default TodoList;
