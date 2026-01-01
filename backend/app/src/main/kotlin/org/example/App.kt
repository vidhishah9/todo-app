package org.example.service
import io.grpc.ServerBuilder
import org.example.db.Db



class App {
    val greeting: String
        get() {
            return "Hello World!"
        }
}

fun main() {
    Db.init()
    val server = ServerBuilder
        .forPort(50051)
        .addService(TodoServiceImpl())
        .build()

    server.start()
    println("gRPC server started on port 50051")
    server.awaitTermination()
}
