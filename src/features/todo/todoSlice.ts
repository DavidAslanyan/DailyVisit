interface TodoState {
  id: number;
  title: string;
  isComplete: boolean;
  todo?: any
};

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: {
    title: string;
  }
};

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  payload: {
    id: number;
  }
};

interface CheckTodoAction {
  type: typeof CHECK_TODO;
  payload: {
    id: number;
  }
};

interface ClearAllTodoAction {
  type: typeof CLEAR_ALL_TODO;
};

interface ClearCompletedTodoAction {
  type: typeof CLEAR_COMPLETED_TODO;
};

type TodoAction =
  | AddTodoAction
  | DeleteTodoAction
  | CheckTodoAction
  | ClearAllTodoAction
  | ClearCompletedTodoAction;


export const initialTodoState: TodoState[] = JSON.parse(localStorage.getItem('todo') || '[]');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const CHECK_TODO = 'CHECK_TODO';
const CLEAR_ALL_TODO = 'CLEAR_ALL_TODO';
const CLEAR_COMPLETED_TODO = 'CLEAR_COMPLETED_TODO';


export const todoReducer = (state = initialTodoState, action: TodoAction) => {
  switch (action.type) {

    case ADD_TODO:
      const newTodo = {
        id: Math.random(),
        title: action.payload.title,
        isComplete: false
      };
      const newState = [...state, newTodo];
      localStorage.setItem('todo', JSON.stringify(newState)); 
      return newState;

    case DELETE_TODO:
      const filteredState = state.filter(todo => todo.id !== action.payload.id);
      localStorage.setItem('todo', JSON.stringify(filteredState)); 
      return filteredState;

    case CHECK_TODO:
      const checkedState = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isComplete: !todo.isComplete };
        } else {
          return todo;
        }
      });
      localStorage.setItem('todo', JSON.stringify(checkedState)); 
      return checkedState;

    case CLEAR_COMPLETED_TODO:
      localStorage.removeItem('todo'); 
      return state.filter(todo => !todo.isComplete);

    case CLEAR_ALL_TODO:
      localStorage.removeItem('todo');
      return [];

    default:
      return state;
  }
};


export const selectTodo = (state: TodoState) => {
  return state.todo;
};

export const addTodo = (text: string) => {
  return (
    {
      type: ADD_TODO,
      payload: {
        title: text
      }
    }
  )
};

export const deleteTodo = (id: number) => {
  return (
    {
      type: DELETE_TODO,
      payload: {
        id: id
      }
    }
  )
};

export const checkTodo = (id: number) => {
  return (
    {
      type: CHECK_TODO,
      payload: {
        id: id
      }
    }
  )
};

export const clearAllTodo = () => {
  return (
    {
      type: CLEAR_ALL_TODO
    }
  )
};

export const clearCompletedTodo = () => {
  return (
    {
      type: CLEAR_COMPLETED_TODO
    }
  )
};