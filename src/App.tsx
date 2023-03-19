import './App.css';
import { useEffect } from 'react';
import HomePage from './pages/HomePage/HomePage';
import mountainBottom2 from './assets/bottom-2.png';
import TodoPage from './pages/TodoPage/TodoPage';
import WeatherPage from './pages/WeatherPage/WeatherPage';
import CurrencyPage from './pages/CurrencyPage/CurrencyPage';
import NewsPage from './pages/NewsPage/NewsPage';
import FooterPage from './pages/FooterPage/FooterPage';
import { navItems } from './pages/HomePage/HomePage';
import PageTitle from './components/PageTitle/PageTitle';


function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <HomePage />
      <article className='main-article' style={{backgroundImage: `url(${mountainBottom2})`}}>
        <WeatherPage />
      </article>
      <PageTitle title='currencies'/>
      <CurrencyPage />
      <PageTitle title='news'/>
      <NewsPage />
      <PageTitle title='todo'/>
      <TodoPage />
      <FooterPage navItems={navItems}/>
    </div>
  )
}

export default App;
