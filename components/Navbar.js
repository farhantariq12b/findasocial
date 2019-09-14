
const Navbar = () => (
  <div>
    <div className="finda-social-navbar">
      <div className="finda-social-navbar__logo">
        <a href="#">
          <img src="/static/assets/images/logo.png" />
        </a>
      </div>
      <div className="navbar-link">
        <ul className="navbar-unorder">
          <li className="navbar-list">
            <a className="navbarlist-link" href="#">PRICING</a>
          </li>
          <li className="navbar-list">
            <a className="navbarlist-link" href="#">FEATURES</a>
          </li>
          <li className="navbar-list">
            <a className="navbarlist-link" href="#">Product</a>
          </li>
        </ul>
      </div>
      <div className="navbar-sigin">
        <a className="nav-sign" href="#">SIGN IN</a>
        <button className="nav-getstart-btn">get sTARTED</button>
      </div>
    </div>

    <style jsx>{`
      .finda-social-navbar {
        display: grid;
        grid-template-columns: 20% 60% 20%;
        padding-top: 40px;
      }
      .navbar-link .navbar-unorder {
        margin: 0;
        padding: 0;
      }
      .navbar-link .navbar-list {
        display: inline;
        list-style-type: none;
        padding: 0 40px;
        line-height: 50px;
      }
      .navbar-link .navbarlist-link {
        font-size: 16px;
        color: #fff;
        font-family: 'Barlow', sans-serif;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
      }
      .navbar-sigin {
        display: grid;
        grid-template-columns: 35% 65%;
      }
      .navbar-sigin .nav-sign {
        font-size: 16px;
        color: #fff;
        font-family: 'Barlow', sans-serif;
        font-weight: 700;
        display: block;
        line-height: 50px;
        text-decoration: none;
        text-transform: uppercase;
      }
      .navbar-sigin .nav-getstart-btn {
        background-color: #F32855;
        width: 126px;
        height: 40px;
        text-align: center;
        border: 0;
        border-radius: 4px;
        font-size: 14px;
        color: #fff;
        font-family: 'Barlow', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        margin-left: 25px;
        margin-top: 6px;
      }
      .nav-getstart-btn {
        outline: none;
      }
    `}</style>
  </div>
);

export default Navbar;