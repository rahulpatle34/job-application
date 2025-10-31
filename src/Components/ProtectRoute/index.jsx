import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from 'js-cookie'

const ProtectRoute = (prop)=>{
      const{Component}=prop;
    const navigate = useNavigate();

    useEffect(()=>{
      
        const token = Cookie.get("myToken")
          if(token === undefined){
            navigate("/login")
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])



    return(
    <Component/>
    )
}

export default ProtectRoute;