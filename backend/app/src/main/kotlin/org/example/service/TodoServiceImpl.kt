package org.example.service

import org.example.db.TodosTable
import todo.Todo
import todo.TodoServiceGrpcKt
import java.util.UUID
import org.jetbrains.exposed.sql.insert
import org.jetbrains.exposed.sql.selectAll
import org.jetbrains.exposed.sql.transactions.transaction

class TodoServiceImpl : TodoServiceGrpcKt.TodoServiceCoroutineImplBase() {

    override suspend fun addTodo(request: Todo.TodoItem): Todo.TodoResponse {
        val id = UUID.randomUUID().toString()

        transaction {
            TodosTable.insert {
                it[TodosTable.id] = id
                it[TodosTable.task] = request.task
            }
        }

        return Todo.TodoResponse.newBuilder()
            .setSuccess(true)
            .build()
    }

    override suspend fun listTodos(request: Todo.Empty): Todo.TodoList {
        val items: List<Todo.TodoItem> = transaction {
            TodosTable.selectAll().map { row ->
                Todo.TodoItem.newBuilder()
                    .setId(row[TodosTable.id])
                    .setTask(row[TodosTable.task])
                    .build()
            }
        }

        val builder = Todo.TodoList.newBuilder()
        items.forEach { builder.addTodos(it) }
        return builder.build()
    }
}
