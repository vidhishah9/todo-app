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

## How to run locally

> You’ll run **three things**: the gRPC backend, the gRPC-Web proxy, and the React frontend.

### 1) Start the backend (Kotlin gRPC server)
```bash
cd backend
./gradlew run
```
### 2) Start the gRPC-Web proxy (for the frotnend to connect with the backend)
```bash
grpcwebproxy \
  --backend_addr=localhost:50051 \
  --run_tls_server=false \
  --allow_all_origins
```
### 3) Start the frontend (React)
```bash
npm run start
```




