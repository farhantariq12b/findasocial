
class Menu extends React.Component {
  render() {
    return (
      <div>
        <div className="mob-navbar">
            <a className="close-icon" href="#">
              <img onClick={this.props.closePopup} src="/static/assets/images/menu-close.svg" />
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
        <style jsx>{`
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
              top: 0;
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
  }
}

export default Menu;