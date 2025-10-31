import './index.css'
import { FaStar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { useState,useEffect } from 'react';

/*company_logo_url: "https://assets.ccbp.in/frontend/react-js/jobby-app/netflix-img.png"
employment_type: "Internship"
id: "bb95e51b-b1b2-4d97-bee4-1d5ec2b96751"
job_description: "We are looking for a DevOps Engineer with a minimum of 5 years of industry experience, preferably working in the financial IT community. The position in the team is focused on delivering exceptional services to both BU and Dev partners to minimize/avoid any production outages. The role will focus on production support."
location: "Delhi"
package_per_annum: "10 LPA"
rating: 4
title: "Devops Engineer"

*/
const AllJobsSection = (props) =>{

    const {Joblist}=props

    
    
  
    return(
        
        <>
     
     <Link to={`/jobs/${Joblist.id}` }className="allJobsLink">
        <li className='job-list'>
       
        <div> 
        <div className='card-top-sec'>
         <div className='card-top-left-sec'>
          <img src={Joblist.company_logo_url} width={"80px"}/>
          </div>
          <div className='card-top-right-sec' >
          <h2 className='ml-4 mb-2'>{Joblist.title}</h2>
          <h5 className='ml-4 mb-2'><FaStar color='gold' className='mr-2'/>{Joblist.rating}</h5>
          </div>
        </div>
        
        <hr style={{width:"100%",backgroundColor:"white"}}/>
        <h5>Description</h5>
         <p>{Joblist.job_description}</p>
         <hr style={{width:"100%",backgroundColor:"white"}}/>
         <div className='card-bottom-sec'>
            <div style={{display:'flex'}}>
            <p className='mr-4'><IoLocationSharp className='mr-2' />{Joblist.location}</p>
            <p><FaBriefcase className='mr-2'/>{Joblist.employment_type}</p>
            </div>
            <h6>{Joblist.package_per_annum}</h6>
         </div>

        </div>

        </li>
</Link>
        </>
     
    )
}
export default AllJobsSection;