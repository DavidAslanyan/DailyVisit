import './_newsCard.scss';
import breakingNewsImage from '../../assets/breakingNews.jpg';

interface NewsCardPropsType {
  source: string,
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string
}

function NewsCard(props: NewsCardPropsType) {
  const { source, title, author, description, url, urlToImage, publishedAt } = props;

  return (
    <div data-aos="fade-up" className="newsCard">
      <h2 className="newsCard__source">{source}</h2>
      <img className="newsCard__image" src={urlToImage ? urlToImage : breakingNewsImage } alt='news Image' onError={(e: any) => { e.target.src = `${breakingNewsImage}` }}/>
      <h3 className="newsCard__title">{title ? <span>{`${title.substring(0, 60)}...`}</span> : null}</h3>
      <p className="newsCard__description">{description ? <span>{`${description.substring(0, 60)}...`}</span> : null}</p>
      <section className="newsCard__info">
        <p className="newsCard__author">Article By {author ? <span className='newsCard__authorLink'>{author[0].substring(0, 16)}</span> : <span className='newsCard__authorLink'>Unknown</span>}</p>
        <p className="newsCard__published">Published at <strong>{publishedAt}</strong></p>
      </section>
      <a className='newsCard__readMore' href={url}>Read More</a>
      <i className='bx bx-right-arrow-alt newsCard__readMoreArrow'></i>
    </div>
  )
}

export default NewsCard
