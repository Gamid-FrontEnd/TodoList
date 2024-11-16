import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, updateTodo } from "../components/api/todosSrvices";

interface TodosState {
    todos: Array<{id: string, todo: string, isDone: boolean, when: Date;}>,
}

const initialState: TodosState = {
    todos: [],
}

interface TodoInput {
    todo: string;
    isDone: boolean;
    when: Date;
}

interface TodoResponse {
  id: string;
  todo: string;
  isDone: boolean;
  when: Date;
}


export const addTodoAsync = createAsyncThunk(
  "todos/addTodo",
  async (todoData: TodoInput) => {
    const response = await addTodo(todoData);
    return response;
  }
);

export const updateTodoAsync = createAsyncThunk(
    "todos/updateTodo",
    async ({ id, todoData }: { id: string; todoData: Partial<TodoInput> }) => {
        const response = await updateTodo(id, todoData);
        return response;
    }
)

export const deleteTodoAsync = createAsyncThunk(
    "todos/deleteTodo",
    async (id: string) => {
        const response =  await deleteTodo(id);
        return response
    }
)

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setAllTodos(state, action: PayloadAction<Array<{id: string, todo: string, isDone: boolean, when: Date}>>) {
            state.todos = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addTodoAsync.fulfilled, (state, action: PayloadAction<TodoResponse>) => {
            state.todos.push(action.payload);
        });
        builder.addCase(updateTodoAsync.fulfilled, (state, action: PayloadAction<TodoResponse>) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            state.todos[index] = action.payload;
        });
        builder.addCase(deleteTodoAsync.fulfilled, (state, action: PayloadAction<Array<{id: string, todo: string, isDone: boolean, when: Date}>>) => {
            state.todos = action.payload;
        })
    },

})

export const {setAllTodos} = todoSlice.actions;

export default todoSlice.reducer;