import api from "./api";

interface Todo {
  todo: string;
  isDone: boolean;
  when: Date;
}

interface TodoResponse extends Todo {
  id: string;
}

export const getTodos = async (): Promise<TodoResponse[]> => {
  const response = await api.get<TodoResponse[]>("/todos");
  return response.data;
};

export const addTodo = async (todoData: Todo): Promise<TodoResponse> => {
  const response = await api.post<TodoResponse>("/todos", todoData);
  return response.data;
};

export const updateTodo = async (id: string, todoData: Partial<Todo>): Promise<TodoResponse> => {
  const response = await api.put<TodoResponse>(`/todos/${id}`, todoData);
  return response.data;
};

export const deleteTodo = async (id: string): Promise<TodoResponse[]> => {
  const response = await api.delete(`/todos/${id}`);
  return response.data;
};
