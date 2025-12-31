import * as jspb from 'google-protobuf'



export class TodoItem extends jspb.Message {
  getId(): string;
  setId(value: string): TodoItem;

  getTask(): string;
  setTask(value: string): TodoItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoItem.AsObject;
  static toObject(includeInstance: boolean, msg: TodoItem): TodoItem.AsObject;
  static serializeBinaryToWriter(message: TodoItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoItem;
  static deserializeBinaryFromReader(message: TodoItem, reader: jspb.BinaryReader): TodoItem;
}

export namespace TodoItem {
  export type AsObject = {
    id: string;
    task: string;
  };
}

export class TodoResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): TodoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TodoResponse): TodoResponse.AsObject;
  static serializeBinaryToWriter(message: TodoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoResponse;
  static deserializeBinaryFromReader(message: TodoResponse, reader: jspb.BinaryReader): TodoResponse;
}

export namespace TodoResponse {
  export type AsObject = {
    success: boolean;
  };
}

export class TodoList extends jspb.Message {
  getTodosList(): Array<TodoItem>;
  setTodosList(value: Array<TodoItem>): TodoList;
  clearTodosList(): TodoList;
  addTodos(value?: TodoItem, index?: number): TodoItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TodoList.AsObject;
  static toObject(includeInstance: boolean, msg: TodoList): TodoList.AsObject;
  static serializeBinaryToWriter(message: TodoList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TodoList;
  static deserializeBinaryFromReader(message: TodoList, reader: jspb.BinaryReader): TodoList;
}

export namespace TodoList {
  export type AsObject = {
    todosList: Array<TodoItem.AsObject>;
  };
}

export class Empty extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Empty.AsObject;
  static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
  static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Empty;
  static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
  export type AsObject = {
  };
}

