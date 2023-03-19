import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CurrencyCard from '../../components/CurrencyCard/CurrencyCard';
import './_currencyPage.scss';
import armeniaFlag from '../../assets/armenia.png';
import russiaFlag from '../../assets/russia.png';
import usaFlag from '../../assets/usa.png';
import ukFlag from '../../assets/uk.png';
import eurFlag from '../../assets/eur.png';
import chinaFlag from '../../assets/china.png';
import swissFlag from '../../assets/switzerland.png';
import hongkongFlag from '../../assets/hongkong.png';
import japanFlag from '../../assets/japan.png';
import CurrencyConverter from '../../components/CurrencyConverter/CurrencyConverter';
import { fetchCurrency } from '../../features/currency/currencySlice';
import PageMainTitle from '../../components/PageMainTitle/PageMainTitle';

interface CurrencyState {
  currency: {
    data: any;
  };
}


function CurrencyPage() {
  const dispatch = useDispatch();

  let defaultCurrencies = {
    data: {
      data: {
        AMD: {
          value: 388.23233234
        },
        USD: {
          value: 1
        },
        RUB: {
          value: 75.85
        },
        EUR: {
          value: 0.94
        },
        GBP: {
          value: 0.83
        },
        CNY: {
          value: 6.96
        },
        JPY: {
          value: 136.4
        },
        CHF: {
          value: 0.93
        },
        HKD: {
          value: 7.84
        }
      }
    }
  }

  const currencyRetrieved = useSelector((state: CurrencyState) => state.currency.data);

  useEffect(() => {
    dispatch(fetchCurrency())
  }, [])

  const VALUE_LIMIT= 5;
  let curData;

  if (!currencyRetrieved.data) {
    curData = defaultCurrencies.data.data
  } else {
    curData = currencyRetrieved.data.data
  }

  const currencies = [
      {
        title: 'American dollar',
        currency: 'USD',
        result: `${curData.USD.value.toString().substring(0, VALUE_LIMIT)}$`,
        num: curData.USD.value,
        flag: usaFlag
      },
      {
        title: 'Armenian dram',
        currency: 'AMD',
        result: `${curData.AMD.value.toString().substring(0, VALUE_LIMIT)}֏`,
        num: curData.AMD.value,
        flag: armeniaFlag
      },
      {
        title: 'Russian ruble',
        currency: 'RUB',
        result: `${curData.RUB.value.toString().substring(0, VALUE_LIMIT)}₽`,
        num: curData.RUB.value,
        flag: russiaFlag
      },
      {
        title: 'European euro',
        currency: 'EUR',
        result: `${curData.EUR.value.toString().substring(0, VALUE_LIMIT)}€`,
        num: curData.EUR.value,
        flag: eurFlag
      },
      {
        title: 'British pound',
        currency: 'GBP',
        result: `${curData.GBP.value.toString().substring(0, VALUE_LIMIT)}£`,
        num: curData.GBP.value,
        flag: ukFlag
      },
      {
        title: 'Chinese yuan',
        currency: 'CNY',
        result: `${curData.CNY.value.toString().substring(0, VALUE_LIMIT)}¥`,
        num: curData.CNY.value,
        flag: chinaFlag
      },
      {
        title: 'Japanese yen',
        currency: 'JPY',
        result: `${curData.JPY.value.toString().substring(0, VALUE_LIMIT)}¥`,
        num: curData.JPY.value,
        flag: japanFlag
      },
      {
        title: 'Hong Kong dollar',
        currency: 'HKD',
        result: `${curData.HKD.value.toString().substring(0, VALUE_LIMIT)}$`,
        num: curData.HKD.value,
        flag: hongkongFlag
      },
      {
        title: 'Swiss franc',
        currency: 'CHF',
        result: `${curData.CHF.value.toString().substring(0, VALUE_LIMIT)}SFr.`,
        num: curData.CHF.value,
        flag: swissFlag
      }
    ];


  return (
      <div className='currency' id='currencies'>
        <div className='currency__content contentWidth'>
          <div className='currency__mainTitle'>
            <PageMainTitle title='Currencies Worldwide'/>
          </div>
          <div className='currency__container'>
            <ul className='currency__list'>
              {currencies ? 
              <div className='currency__list'>
                {currencies.map((item, idx) => (
                <CurrencyCard key={idx} title={item.title} currency={item.currency} result={item.result} flag={item.flag}/>
              ))}
              </div> : null}
            </ul>
          </div>
        </div>
        <CurrencyConverter />
      </div>
  )
}

export default CurrencyPage;