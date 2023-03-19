import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import caveImg from '../../assets/blueCave.jpg';
import TodoItem from '../../components/TodoItem/TodoItem';
import todoImage from '../../assets/list.gif';
import { selectInput, readInput } from '../../features/todo/inputSlice';
import { addTodo, checkTodo, clearAllTodo, clearCompletedTodo, deleteTodo, selectTodo } from '../../features/todo/todoSlice';
import './_todoPage.scss';
import TodoGifBlock from '../../components/TodoGifBlock/TodoGifBlock';

interface todoState {
  id: number;
  title: string;
  isComplete: boolean;
}

type FormEvent = React.FormEvent<HTMLFormElement>;

function TodoPage() {
  const dispatch= useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const todoInput = useSelector(selectInput);
  const todoList: todoState[] = useSelector(selectTodo);
  const MAX_TODO = 25;

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    if (todoList.length >= MAX_TODO) {
      setErrorMessage(`Reached maximum amount of todos ${MAX_TODO}`);
      return;
    }
    if (todoInput !== '') {
      dispatch(addTodo(todoInput.substring(0, 60)))
      setErrorMessage('');
    }
    dispatch(readInput(''));
  }

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  }

  const handleChecked = (id: number) => {
    dispatch(checkTodo(id));
  }


  return (
    <div id='todo' className='todo'>
      <div data-aos="fade-up" data-aos-duration="500" className='todo__content'>
      <h2 className='todo__topTitle'>Write Down the Important!</h2>
        <h1 className='todo__title'>Todo List</h1><p className='todo__errorMessage'>{errorMessage}</p>
        <form onSubmit={handleSubmit} className='todo__form'>
          <input autoFocus type='text' className='todo__input' value={todoInput} onChange={(evt) => dispatch(readInput(evt.target.value))}/>
          <button type='submit' className='todo__button'>Add</button>
        </form>
        <section className='todo__section'>
          {todoList.length === 0 ? <p className='todo__empty'>List empty, add your first todo<i className='bx bx-edit'></i></p> : null}
          <ul className='todo__list'>
            {todoList.map((todo, index) => (
              <TodoItem 
                key={todo.id} 
                id={todo.id} 
                index={index} 
                title={todo.title} 
                isComplete={todo.isComplete} 
                onDelete={handleDelete}
                onCheck={handleChecked}/>
            ))}
          </ul>
        </section>
        {todoList.length === 0 ? null :
        <section className='todo__info'>
          <p className='todo__numberOfTodo'>Number of Todos: &emsp;{todoList.length}</p>
          <p className='todo__completedTodo'>Completed Todos:&emsp; {todoList.filter(todo => todo.isComplete).length}</p>
          <button className='todo__buttonBottomOne' onClick={() => dispatch(clearCompletedTodo())}>Clear Completed</button>
          <button className='todo__buttonBottomTwo' onClick={() => dispatch(clearAllTodo())}>Clear All</button>
        </section>
        }
      </div>
      <TodoGifBlock title='Write Down the Important!' todoImage={todoImage}/>
    </div>
  )
}

export default TodoPage;