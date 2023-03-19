import './_todoGifBlock.scss';

interface TodoGifBlockProps {
  title: string;
  todoImage: string;
}

function TodoGifBlock(props: TodoGifBlockProps) {
  const { title, todoImage } = props;

  return (
    <div className='todo-imageBlock'>
        <h2 className='todo__rightTitle'>{title}</h2>
        <div className='todo__imageWrapper'>
          <img className='todo__image' src={todoImage} alt='todo image'/>
        </div>
    </div>
  )
}

export default TodoGifBlock
