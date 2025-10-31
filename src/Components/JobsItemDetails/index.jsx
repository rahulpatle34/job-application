import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from '../Header';
import { IoMdStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from "react-icons/fa";
import './index.css'
import { useEffect,useState } from 'react';
import SimilarJobs from '../SimilarJobs';

const JobsItemDetails =()=>{

    const [allValues,setValues]=useState({
        
        jobDetails:{},
        skills:[],
        lifeAtCompany:{},
        similarJobs:[]
    })

    const {jobDetails,skills,lifeAtCompany}=allValues

    const {id}=useParams()

    useEffect(()=>{
       const getJobDetails =async()=>{
       
        const api= `https://apis.ccbp.in/jobs/${id}`

        const token = Cookies.get("myToken")

        const option ={

            method:"Get",
            headers:{
                Authorization:`Bearer ${token}`
            }
        }

        try {
            const response = await fetch(api,option)
        const data = await response.json()
         setValues({jobDetails:data.job_details,skills:data.job_details.skills,lifeAtCompany:data.job_details.life_at_company,allValues,similarJobs:data.similar_jobs})
        console.log(data)
        } catch (error) {
            console.log(error)
        }
        
    }
     getJobDetails()

    },[id])

   
    return(
        <>
         <Header/>
        <div className='jobDetails-conta'>
          
          <div className='subJob-Conta'>
             
             <div className='d-flex mb-2'>
                <div className='mr-2'>
                    <img src={jobDetails.company_logo_url} style={{width:"80px"}} />
                </div>
                <div className='ml-2'>
                 <h3>
                    {jobDetails.title}
                </h3>
                <h4><IoMdStar color='yellow' className='mr-2' />{jobDetails.rating}</h4>
                </div>
               
             </div>

             <div className='d-flex justify-content-between '>
                <div className='d-flex'>
                <span className='mr-4'><FaLocationDot className='mr-2'/>{jobDetails.location}</span>
                <span><FaBriefcase className='mr-2'/>{jobDetails.employment_type}</span>
                </div>
                <h5>{jobDetails.package_per_annum}</h5>
             </div>
             <hr style={{backgroundColor:"grey",width:"100%"}}/>
             <div>
                <div className='d-flex justify-content-between'>
             <h4>Description</h4>
             <Link to={jobDetails.company_website_url} target="_blank">Visit<FaExternalLinkAlt className='ml-2'/></Link>
             </div>
             <p style={{textAlign:"justify"}}>{jobDetails.job_description}</p>
             </div>

             <div>
                <h4 className='mb-3'>Skills</h4>
                <div className='skill-cont'>
                {
                    
                    skills.map((e,index)=>(
                    
                      <div className='d-flex mr-4 ' key={index}>
                        
                        <img src={e.image_url} style={{width:"30px"}}/>
                        <h5 className='ml-2'>{e.name}</h5>
                        
                      </div>
                     
                    ))
                }
                </div>
             </div>
             <br/>
<h4>Life at Company</h4>
             <div className='life-company'>
                <div className='left-lifeco-sec'>
                    <p>{lifeAtCompany.description}</p>
                </div>
                <div className='right-lifeco-sec'>
                    <img src={lifeAtCompany.image_url} style={{width:"100%",height:"60%"}}/>
                </div>
             </div>
          
          <h4>Similar Jobs</h4>
            <ul className='similar-job-cantainer' style={{listStyle:"none"}}>
                
              {
                  allValues.similarJobs.map(e=><SimilarJobs similar={e} key={e.id}/>)
              }
              </ul>
             </div>
          
        </div>
        
        </>
    )
}

export default JobsItemDetails;