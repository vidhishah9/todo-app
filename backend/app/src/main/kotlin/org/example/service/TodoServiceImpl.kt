package org.example.service

import todo.Todo
import todo.TodoServiceGrpcKt

class TodoServiceImpl : TodoServiceGrpcKt.TodoServiceCoroutineImplBase() {

    private val todos = mutableListOf<Todo.TodoItem>()

    override suspend fun addTodo(request: Todo.TodoItem): Todo.TodoResponse {
        todos.add(request)

        return Todo.TodoResponse.newBuilder()
            .setSuccess(true)
            .build()
    }

    override suspend fun listTodos(request: Todo.Empty): Todo.TodoList {
        val listBuilder = Todo.TodoList.newBuilder()
        todos.forEach { listBuilder.addTodos(it) }
        return listBuilder.build()
    }
}
