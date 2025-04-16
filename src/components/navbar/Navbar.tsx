import "../../App.css"
import "./Navbar.css";
import logo from "../../assets/images/logo2.png"

function Navbar() {
  return (
    <div className="navbar">
      <div className="container ">
        <div className="navbarSection">
          <div className="logo"><img src={logo} alt="logo" /> Tashxis AI</div> 
          <div className="items">
            <ul>
                <li><a href="#">Qo'llanma</a></li>
                <li className="hidden md:block"><a href="#">Maxfiylik</a></li>
            </ul>
            <div className="select">
            <select name="language" id="language">
              <option value="uz">O'zb</option>
              <option value="ru">Rus</option>
              <option value="en">Eng</option>
            </select>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
