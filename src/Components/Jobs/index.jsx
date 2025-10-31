import { useEffect,useState } from 'react';
import Cookies from 'js-cookie';
import Header from '../Header';
import FilterJobSection from '../FilterJobSection';
import AllJobsSection from '../AllJobsSection';
import './index.css'



const Jobs = ()=>{

const [allValues,setValues]=useState({
    
    jobsArr:[],
    empType:[],
    salType:"",
    userIn:"",
    loader: true,

})
useEffect(()=>{

    const {empType,salType,userIn} = allValues;
const jobDetails = async() =>{

       setValues({...allValues,loader:true})
   
    const api = `https://apis.ccbp.in/jobs?employment_type=${empType}&minimum_package=${salType}&search=${userIn}`
    const token = Cookies.get("myToken")

    const option = {
      method:"Get",
      headers:{
        Authorization:`Bearer ${token}`
      }
    }
    try {
        const response = await fetch(api,option);
        const data = await response.json()
    
        if(response.ok){
            setValues({...allValues,jobsArr:data.jobs,loader:false})
            
        }
        else{
            setValues({...allValues,loader:false})
        }
    } catch (error) {
        console.log(error)
    }
}

jobDetails();
          // eslint-disable-next-line react-hooks/exhaustive-deps
},[allValues.userIn,allValues.empType,allValues.salType])

const onUserInput=(e)=>{
    
   
    if( e.key === "Enter"){
         setValues({...allValues,userIn:e.target.value})
    }
}
    return(
        <>
        <div style={{backgroundColor:"rgba(26, 23, 23, 0.86)"}}>
            <div>
        <Header/>
        </div>
        <br/><br/><br/><br/>
        <div className='d-flex justify-content-center m-2'>
        <input onKeyUp={onUserInput} type="text" className='form-control w-50 bg-transparent text-white search-input border border-light' placeholder='Search Jobs Here' />
        </div>
        <div className='job-conta'>
            <div className='left-cont'>
                <FilterJobSection allMyValues={allValues} setMyValues={setValues}/>
            </div>
            
           <div className='right-cont'>
             {allValues.loader ? ( 
                <div className="loader-wrapper">
              <div className="spinner-border text-light"  role="status" style={{ width: "3rem", height: "3rem"}}>
              <span className="sr-only">Loading...</span>
            </div>
            </div>
            ) : allValues.jobsArr.length === 0 ? ( 
                <div className='Nojobs'>
              <p className="text-white text-center">No jobs found</p>
              </div>
            ) : (
                <ul>
                { 
                  
                    allValues.jobsArr.map(each =><AllJobsSection Joblist={each} key={each.id} allValues={allValues} setValues={setValues}/>)
                }
                </ul>
                 )}
            </div>

        </div>
        </div>
        </>
    )
}

export default Jobs;