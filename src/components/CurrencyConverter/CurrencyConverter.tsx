import { ErrorResponse } from "@remix-run/router";
import { useEffect, useState } from "react";
import './_currencyConverter.scss';

const myHeaders = new Headers();
myHeaders.append("apikey", "vJguaUrd43X4oQiFyE84cKvbHMXJMwg6");

const requestOptions: RequestInit = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function CurrencyConverter() {

  const currencyList: String[] = ['USD', 'AMD', 'RUB', 'EUR', 'GBP', 'CNY', 'JPY', 'CHF', 'HKD'];

  const [inputFrom, setInputFrom] = useState('');
  const [inputTo, setInputTo] = useState('');
  const [amount, setAmount] = useState(0);

  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState(0);

  const isValidResponse = (): boolean => {
    if (!inputFrom && !inputTo && !amount) {
      setErrorMessage('Must select all required fields');
      return false;
    }
    if (!amount) {
      setErrorMessage('Please, provide amount');
      return false;
    }
    if (amount.toString() === '' || amount < 0 || amount > 99999999) {
      setErrorMessage('Please, provide an applicable amount');
      return false;
    }
    if (!currencyList.includes(inputFrom) || !currencyList.includes(inputTo)) {
      setErrorMessage('Please, provide an applicable currency format');
      return false;
    }
    if (inputFrom === inputTo) {
      setErrorMessage('Provided currencies are the same');
      return false;
    }

    setErrorMessage('');
    setAmount(0);
    return true;
  }

  const handleSelectedCurrencies = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    if (isValidResponse()) {
      const fetchData = async () => {
        const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${inputTo}&from=${inputFrom}&amount=${amount}`, requestOptions);
        const data = await response.json();
        setResult(parseFloat(data.result))
      }
      fetchData();
    }
  }


  return (
    <div className="converter">
      <h3 className="converter__title">Convert Your Currency</h3>
      <form className="converter__form" onSubmit={handleSelectedCurrencies}>

        <div className="converter__currencies">
          <section className="converter__from">
            <span className="converter__span">From</span>
            <select defaultValue="" className="converter__select" onChange={(evt) => setInputFrom(evt.target.value)}>
              <option value="" disabled>Select</option>
              {currencyList.map((item, idx) => (
                <option value={String(item)} className="converter__option" key={idx}>{item}</option>
              ))}
            </select>
          </section>

          <section className="converter__to">
            <span className="converter__span">To</span>
            <select defaultValue="" className="converter__select" onChange={(evt) => setInputTo(evt.target.value)}>
              <option value="" disabled>Select</option>
              {currencyList.map((item, idx) => (
                <option value={String(item)} className="converter__option" key={idx}>{item}</option>
              ))}
            </select>
          </section>
        </div>

        <section className="converter__amount">
          <span className="converter__span">Amount</span>
          <input className="converter__input" type='number' onChange={(evt) => setAmount(parseFloat(evt.target.value))}/>
          <button className="converter__button" type='submit'>Calculate</button>
        </section>
      </form>
      {errorMessage ? <p className="converter__error">{errorMessage}</p> : null}
      {result ? <p className="converter__result">Result: <span className="converter__result--green">{result}{inputTo}</span></p> : null}
    </div>
  )
}

export default CurrencyConverter;