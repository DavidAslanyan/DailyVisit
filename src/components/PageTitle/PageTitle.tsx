import './_pageTitle.scss';

interface PageTitleProps {
  title: string;
}

function PageTitle(props: PageTitleProps) {
  const { title } = props;
  return (
    <span className="pageTitle">{title}</span>
  )
}

export default PageTitle
