import './_navbarMain.scss';

interface MyComponentProps {
  items: string[];
}

function NavbarMain(props: MyComponentProps ) {
  const items = props.items;

  return (
    <nav className='nav'>
      <ul className='nav__list contentWidth'>
        {items.map((item, idx) => (
          <li key={idx} className='nav__item'><a className='nav__link' href={`#${item}`}>{item}</a></li>
        ))}
      </ul>
    </nav>
  )
}

export default NavbarMain;
