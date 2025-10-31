import './index.css'
import { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import logo from '../../images/logo.png'


const Login = ()=>{

    const navigate = useNavigate();
     
    useEffect(()=>{

        const token = Cookies.get("myToken");
         if(token !== undefined){

            navigate("/");
         }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


  const [allValues,setValues] = useState({
        username: "",
        password: "",
        errorMsg:""
  })
   const onSubmitForm =async(e)=>{

        e.preventDefault()
        const api = "https://apis.ccbp.in/login"

    const userDetails = {

        username: allValues.username,
        password: allValues.password
    }

    const option = {
        method: 'Post',
        body:JSON.stringify(userDetails),
    }

       
        try {
            
        const response = await fetch(api,option);
        const data = await response.json();

        console.log(data)
        if(response.ok){
            Cookies.set("myToken",data.jwt_token)
            setValues({...allValues,errorMsg:""})
            navigate("/")
        }else{
            setValues({...allValues,errorMsg:`${data.error_msg}`})
        }

        } catch (error) {
           console.log(error) 
        }
       
   }

    return(
        <>
<div className='login-conta'>
    <form  onSubmit={onSubmitForm} className='p-5 form-cont'>
        <div className='logo'>
            <img className='logo-img' src={logo} />
        </div><br/>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">USERNAME</label><br/>
    <input  onChange={(e)=>{setValues({...allValues,username:e.target.value})}} type="text" className="mt-2 w-100 input-box border-bottom" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" style={{color:"whitesmoke"}} className="form-text">We'll never share your username with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">PASSWORD</label><br/>
    <input onChange={(e)=>{setValues({...allValues,password:e.target.value})}} type="password" className="mt-2 w-100 input-box border-bottom" id="exampleInputPassword1"/>
  </div>
  <button type="submit" style={{fontSize:"14px"}} className="btn btn-primary form-control mt-2 login-btn">Login</button>
  <br/><br/>
  <p className='errmsg' style={{color:"red"}}>{allValues.errorMsg}</p>
</form>

    </div>    
        
        
        </>
    )
}

export default Login;