import './_pageMainTitle.scss';

interface PageMainTitle {
  title: string;
};

function PageMainTitle(props: PageMainTitle) {
  const { title } = props;
  return (
    <h1 className='pageMainTitle'>{title}</h1>
  )
}

export default PageMainTitle;
