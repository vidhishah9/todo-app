// client.ts
import { TodoServiceClient } from '../generated/TodoServiceClientPb';
import { TodoItem, Empty } from '../generated/todo_pb';

const client = new TodoServiceClient('http://localhost:8080', null, null);

export const addTodo = (task: string): Promise<boolean> => {
  const todo = new TodoItem();
  todo.setTask(task);

  return new Promise((resolve, reject) => {
    client.addTodo(todo, {}, (err, response) => {
      if (err) return reject(err);
      resolve(response.getSuccess());
    });
  });
};

export const getTodos = (): Promise<TodoItem[]> => {
  const request = new Empty();
  return new Promise((resolve, reject) => {
    client.listTodos(request, {}, (err, response) => {
      if (err) return reject(err);
      resolve(response.getTodosList());
    });
  });
};
