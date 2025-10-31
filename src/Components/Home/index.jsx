import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './index.css'

const Home = ()=>{


    return(
        <>
        
         <Header/>
<div className='home-cont'>
  <div className='home-left'>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"data-interval="3000"
  data-pause="hover">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img  src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" className="d-block w-100 home-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img  src="https://images.unsplash.com/photo-1698047681432-006d2449c631?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" className="d-block w-100 home-img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" className="d-block w-100 home-img" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
  </div>
  <br/>
  <div className='home-right'>
    <h1 className='home-head'> Welcome to Jobsy </h1>
    <h5 className='home-head' style={{fontSize:"20px"}}>student career hub</h5>
    <br/>
    <p style={{textAlign:"center"}}>Find your dream job with ease!<br/>Explore thousands of opportunities,apply online, and
    take next step in your career.</p>
    <h6>JOIN US TODAY - YOUR FUTURE STARTS HERE!</h6>
  <Link to="/jobs" className='btn btn-primary'>Find Jobs</Link>
  </div>
   

</div>
<div className='home-bottom'>
  
</div>
        </>
    )
}

export default Home;