import './_navbarTest.scss';

function NavbarTest() {
  return (
    <div>
      <h1>Navbar</h1>
      <ul className='nav__list'>

        <li className='nav__item'><a className='nav__link' href='/'>Servces</a></li>

        <li className='nav__item nav__dropdownRentals'><a className='nav__link' href='/'>Rentals</a>
          <ul className='nav__dropdown-menuRentals'>
            <div className='nav__dropdownPosition'>

            <ul>
              <li><h3>Audio</h3></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Audio Equipment Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Speaker Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Sound System Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Audio Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Audio Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Audio Rental</a></li>
            </ul>

            <ul>
              <li><h3>LED Video Wall</h3></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Speaker Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>LED Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>LED Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>LED Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>LED Rental</a></li>
            </ul>

            <ul>
              <li><h3>Video</h3></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Speaker Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>LED Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>LED Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>LED Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>LED Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Live Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Live Rental</a></li>
            </ul>

            <ul>
              <li><h3>Lighting</h3></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Lighting Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Lighting Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Lighting Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Lighting Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Lighting Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Live Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Live Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Lighting Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Live Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Live Rental</a></li>
            </ul>

            <ul>
              <li><h3>Staging</h3></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Lighting Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Lighting Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Lighting Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Lighting Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Lighting Rental</a></li>
              <li><a href='/'><i className='bx bx-chevron-right'></i>Live Rental</a></li>
            </ul>
            </div>

          </ul>
        </li>

        <li className='nav__item'><a className='nav__link' href='/'>Instagram</a></li>

        <li className='nav__item nav__dropdownBlog'><a className='nav__link' href='/'>Blog</a>
          <ul className='nav__dropdown-menuBlog'>
            <li><a href='/'>Event Branding Inspiration</a></li>
            <li><a href='/'>Event Trends</a></li>
            <li><a href='/'>Event Planning Tips</a></li>
            <li><a href='/'>Productivity Tips</a></li>
            <li><a href='/'>AV Questions</a></li>
          </ul>
        </li>
        
        <li className='nav__item'><a className='nav__link' href='/'>Locations</a></li>

      </ul>
    </div>
  )
}

export default NavbarTest;
