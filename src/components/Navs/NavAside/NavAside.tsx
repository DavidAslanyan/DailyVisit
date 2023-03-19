import './_navAside.scss';

interface MyComponentProps {
  items: string[];
  showMenu: boolean;
}

function NavAside(props: MyComponentProps) {
  const items = props.items;
  const showMenu = props.showMenu;

  return (
    <aside>
      <nav className={`navAside ${showMenu ? 'navAside__true' : 'navAside__false'}`}>
        <ul className="navAside__list">
          <h2 className='navAside__logo'><i className='bx bxl-magento'></i></h2>
          {items.map((item, idx) => (
            <li key={idx} className='navAside__item'><a className='navAside__link' href={`#${item}`}>{item}</a></li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default NavAside;