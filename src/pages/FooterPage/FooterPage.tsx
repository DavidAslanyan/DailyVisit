import './_footerPage.scss';

interface FooterProps {
  navItems: string[]
}

function FooterPage(props: FooterProps) {
  const { navItems } = props;
  return (
   <footer className="footer">
    <div className='footer__content contentWidth'>

      <section className="footer__left">
        <h2 className="footer__title">Daily Visit<i className='bx bxl-magento'></i></h2>
      </section>

      <section className="footer__middle">
        <ul className="footer__list">
          {navItems.map((item, idx) => (
            <li key={idx} className="footer__item"><a className='footer__link' href={`#${item}`}>{item}</a></li>
          ))}
        </ul>
      </section>

      <section className="footer__right">
        <ul className="footer__media">
          <li><i className='bx bxl-youtube'></i></li>
          <li><i className='bx bxl-facebook-circle'></i></li>
          <li><i className='bx bxl-twitter' ></i></li>
        </ul>
        <p>&reg;All Rights Reserved 2023</p>
        <p className="footer__author">Website created by <span className='footer__author--green'><a className='footer__author--green' href='https://github.com/DavidAslanyan'>David Aslanyan<i className='bx bxl-github'></i></a></span></p>
      </section>

    </div>
   </footer>
  )
}

export default FooterPage
