
const Navbar = () => (
  <div>
    <div className="mob-navbar">
        <a className="close-icon" href="#">
          <img src="/static/assets/images/menu-close.svg" />
        </a>
      <ul>
        <li>
          <a href="#">PRICING</a>
        </li>
        <li>
          <a href="#">FEATURES</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">SIGN IN</a>
        </li>
        <li>
          <button>get sTARTED</button>
        </li>
      </ul>
    </div>
    <div className="finda-social-navbar">
      <div className="finda-social-navbar__logo">
        <a href="#">
          <img src="/static/assets/images/logo.png" />
        </a>
      </div>
      <div className="mob-menu">
        <a href="#">
          <img src="/static/assets/images/mob-icon.svg" />
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
        position: relative;
      }
      .finda-social-navbar__logo img {
        height: 50px;
      }
      .mob-menu {
        display: none;
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

      .mob-navbar {
        display: none;
      }
      @media screen and (min-width: 768px) and (max-width: 1250px){
        .finda-social-navbar {
          grid-template-columns: auto auto auto;
        }
        .navbar-link .navbar-list {
          padding: 0 20px;
        }
        .navbar-sigin .nav-getstart-btn {
          width: 110px;
          margin-left: 10px;
        }
      }
      @media screen and (max-width: 767px){
        .navbar-link {
          display: none;
        }
        .finda-social-navbar {
          padding-top: 20px;
        }
        .navbar-sigin {
          display: none;
        }
        .mob-menu {
          position: absolute;
          right: 10px;
          top: 30px;
          display: block;
        }
        .mob-menu img {
          height: 20px;
        }

        .mob-navbar {
          background-color: #F32855;
          position: absolute;
          left: 0;
          right: 0;
          z-index: 9;
          padding: 30px 0;
          display: block;
        }
        .close-icon {
          position: absolute;
          right: 20px;
          top: 20px;
        }
        .close-icon img {
          height: 20px;
        }
        .mob-navbar ul {
          margin: 0;
          padding: 0;

        }
        .mob-navbar ul li{
          list-style-type: none;
          text-align: center;
          padding: 10px 0;
        }
        .mob-navbar ul li button {
          background-color: #fff;
          padding: 8px 11px;
          border: 0;
          border-radius: 5px;
          text-transform: uppercase;
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
        }
        .mob-navbar ul li a {
          color: #fff;
          text-decoration: none;
          font-family: 'Barlow', sans-serif;
          font-weight: 700;
        }
      }
    `}</style>
  </div>
);

export default Navbar;