import './_currencyCard.scss';

interface CurrencyCardProps {
  title: string,
  currency: string,
  flag: string,
  result: string | number
}

function CurrencyCard(props: CurrencyCardProps) {
  const { title, currency, result, flag } = props;

  return (
    <li data-aos="fade-up" className='currency__item'>
      <img className='currency__flag' src={flag} alt={title}/>
      <p className='currency__title'>{title} | ({currency})</p>
      <span data-val='333' className='currency__result'>{result}</span>
    </li>
  )
}

export default CurrencyCard;
