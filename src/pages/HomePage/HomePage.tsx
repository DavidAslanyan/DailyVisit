import mountainTop from '../../assets/top.png';
import mountainMiddle from '../../assets/middle.png';
import mountainBottom from '../../assets/bottom.png';
import './_homePage.scss';
import NavbarMain from '../../components/Navs/NavbarMain/NavbarMain';
import BurgerMenu from '../../components/Navs/BurgerMenu/BurgerMenu';


export const navItems = ['main', 'weather', 'currencies', 'news', 'todo'];

function HomePage() {

  return (
    <main>
      <BurgerMenu />
      <header className='main-header' id='main'>
        <div className="layers">
          <div className="layers__header">
            <NavbarMain items={navItems}/>
            <h2 className='header__semiTitle'>Daily Visit<i className='bx bxl-magento'></i></h2>
            <div className="header__wrapper">
              <h1 className='header__titleStatic'>Here You Get Your -</h1>
              <ul className='header__dynamicTexts'>
                <li><h1>Weather Forecast</h1></li>
                <li><h1>World Currencies</h1></li>
                <li><h1>Todo Tasks</h1></li>
                <li><h1>Latest News</h1></li>
              </ul>
            </div>
          </div>
          <div className="layer layers__top" style={{backgroundImage: `url(${mountainTop})`}}></div>
          <div className="layer layers__middle" style={{backgroundImage: `url(${mountainMiddle})`}}></div>
          <div className="layer layers__bottom" style={{backgroundImage: `url(${mountainBottom})`}}></div>
        </div>
      </header>
    </main>
  )
}

export default HomePage;