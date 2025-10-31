import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import './index.css'


const Header =()=>{

  const navigate = useNavigate();
    const onLogout =()=>{
      
      Cookies.remove("myToken")
        
      navigate("/login")

    }

    return(
        <>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  nav-bar">
  <Link className="navbar-brand" to="/"> <div className='nav-logo'>
              <img className='logo-img' src={logo} />
          </div></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse nav-item" id="navbarText">
    <div className="w-100 d-flex flex-column flex-lg-row align-items-center justify-content-lg-between text-center">
    <ul  className="navbar-nav mx-auto text-center w-100 d-flex flex-column flex-lg-row align-items-center justify-content-lg-center">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/jobs">Jobs</Link>
      </li>
    
    </ul>
   
 <div className="w-100 w-lg-auto text-center text-lg-right">
        <button onClick={onLogout}
          className="btn btn-primary  w-lg-auto"
          style={{ fontSize: "18px" }}
        >
          Logout
        </button>
      </div>
   </div>
  </div>
  
</nav>
        </>
    )
}

export default Header;