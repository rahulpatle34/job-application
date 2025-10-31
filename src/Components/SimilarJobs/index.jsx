import './index.css'
import { Link} from 'react-router-dom'
import { IoMdStar } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";


const SimilarJobs = (prop) =>{
   const {similar}=prop
   

   return(
      
    

       <Link to={`/jobs/${similar.id}`} className="similar-job-link">
            <li className='similar-job-card'>
                
                <div className='d-flex '>
                    <div>
                        <img src={similar.company_logo_url} width={"70px"} className='mr-3'/>
                    </div>
                    <div>
                        <h4>{similar.title}</h4>
                        <h5> <IoMdStar className='mr-2' style={{color:"gold"}}/>{similar.rating}</h5>
                    </div>
                </div>
                <h4>Discription</h4>
                    <div>
                        <p style={{textAlign:"justify"}}>{similar.job_description}</p>
                    </div>

                    <div className='d-flex'>
                        <span className='mr-3'><FaLocationDot className='mr-2' />{similar.location}</span>
                        <span><FaBriefcase className='mr-2'/>{similar.employment_type}</span>
                    </div>
                    
            </li>
     </Link>
    
    

   )


    
}

export default SimilarJobs;