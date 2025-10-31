import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import './index.css'

const Header = () => {
  const navigate = useNavigate()

  const onLogout = () => {
    Cookies.remove('myToken')
    navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top custom-navbar">
      <div className="container">
        {/* ==== LOGO ==== */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" className="logo-img" />
        </Link>

        {/* ==== TOGGLER ==== */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ==== MENU ==== */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">
                Jobs
              </Link>
            </li>
          </ul>

          {/* ==== LOGOUT BUTTON ==== */}
          <div className="text-center text-lg-end">
            <button
              onClick={onLogout}
              className="btn btn-primary logout-btn"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
