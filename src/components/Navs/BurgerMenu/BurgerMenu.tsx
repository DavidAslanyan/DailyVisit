import './_burgerMenu.scss';
import { useState } from 'react';
import { navItems } from '../../../pages/HomePage/HomePage';
import NavAside from '../NavAside/NavAside';

function BurgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <div onClick={handleClick} className='burgerMenu'><i className='bx bx-menu burgerMenu__icon' ></i></div>
      <NavAside showMenu={showMenu} items={navItems}/>
    </>
  )
}

export default BurgerMenu
