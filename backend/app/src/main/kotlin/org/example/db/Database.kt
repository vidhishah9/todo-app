package org.example.db

import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.transactions.transaction

object TodosTable : Table("todos") {
    val id = text("id") // store UUID string
    val task = text("task")

    override val primaryKey = PrimaryKey(id)
}

object Db {
    fun init() {
        // Creates a local file: todo.db (in the working directory)
        Database.connect("jdbc:sqlite:todo.db", driver = "org.sqlite.JDBC")

        transaction {
            SchemaUtils.create(TodosTable)
        }
    }
}
