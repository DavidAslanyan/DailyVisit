import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { newsSelector, fetchNews } from '../../features/news/newsSlice';
import newsDefaultData from '../../data/newsData.json';
import NewsCard from '../../components/NewsCard/NewsCard';
import './_newsPage.scss';
import PageMainTitle from '../../components/PageMainTitle/PageMainTitle';

function NewsPage() {
  const dispatch = useDispatch()

  const data = useSelector(newsSelector);

  useEffect(() => {
    dispatch(fetchNews())
  }, []);

  let curData;

  if (!data) {
    curData = newsDefaultData.results;
  } else {
    curData = data.results;
  }

  return (
    <div className='news' id='news'>
      <div className='news__title contentWidth'>
        <PageMainTitle title='Latest Hot News'/>
      </div>
      {curData.length === 3 ? <span>Loading more news...</span> : null}
      <ul className='news__list contentWidth'>
       {curData.map((data: any, idx: number) => (
        <li key={idx}>
          <NewsCard 
            source={data.source_id} 
            author={data.creator}
            title={data.title} 
            description={data.description} 
            url={data.link} 
            urlToImage={data.image_url} 
            publishedAt={data.pubDate}/>
        </li>
       ))}
      </ul>
    </div>
  )
}

export default NewsPage;
