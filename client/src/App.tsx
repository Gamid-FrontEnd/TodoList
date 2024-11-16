import { useEffect } from "react";
import "./App.css";
import { getTodos } from "./components/api/todosSrvices";
import TodoList from "./components/todosList/TodoList.component";
import { useAppDispatch } from "./store/hooks.redux";
import { setAllTodos } from "./store/todoSlice";

function App() {
  const dispatch = useAppDispatch();

  const fetchTodos = async () => {
    const data = await getTodos();
    dispatch(setAllTodos(data));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
