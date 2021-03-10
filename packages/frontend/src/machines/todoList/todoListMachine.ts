import { Interpreter, Machine, MachineConfig, PayloadSender, State } from 'xstate';

interface TodoListStateSchema {
  states: {}; // eslint-disable-line @typescript-eslint/ban-types
}

export type TodoListEvent = { type: '' };

export interface TodoListContext {} // eslint-disable-line @typescript-eslint/no-empty-interface

export type TodoListMachineType = MachineConfig<TodoListContext, TodoListStateSchema, TodoListEvent>;

export type TodoListServiceType = Interpreter<TodoListContext>;

export type TodoListStateType = [State<TodoListContext>, PayloadSender<TodoListEvent>];

export default Machine<TodoListContext, TodoListStateSchema, TodoListEvent>({
  key: 'todoList',
  states: {}
});
