# To-Do App (gRPC + Kotlin + React + SQLite)

A simple full-stack to-do list built to learn gRPC end-to-end:
**Protocol Buffers → Kotlin gRPC server → gRPC-Web client → React UI**.

## What it does
- Add a task
- List tasks
- Delete a task (RemoveTodo)
- Mark complete (UI cross-out — local state only)

## Tech
**Backend**
- Kotlin + gRPC (coroutines)
- Exposed (SQL)
- SQLite (`todo.db`)

**Frontend**
- React + TypeScript
- grpc-web + google-protobuf generated stubs

---

## Project layout
