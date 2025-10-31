import { useEffect,useState } from 'react';
import Cookies from 'js-cookie';
import './index.css'

const empArr = [
{

    id:"INTERNSHIP",
    label:"Internship"
},
{
    id:"PARTTIME",
    label:"Part Time"
},
{
    id:"FULLTIME",
    label:"Full Time"
},
{
    id:"FREELANCE",
    label:"Freelance"
},
]

const salleryArr = [
{
  id: 1000000,
  label: "10 LPA & Above " 
},
{
    id: 2000000,
  label: "20 LPA & Above "
},
{
    id: 3000000,
  label: "30 LPA & Above "
},
{
    id: 4000000,
    label: "40 LPA & Above "
}
]

const FilterJobSection = (props) =>{
 const{allMyValues,setMyValues} = props;
/*profile_details
: 
name: "Rahul Attluri"
profile_image_url: "https://assets.ccbp.in/frontend/react-js/male-avatar-img.png"
short_bio: "Lead Software Developer and AI-ML expert"
*/
const [allValues,setValues] = useState({

    userProfile:{},
    loader:true,
    
})

    useEffect(()=>{

        const userProfile =async()=>{
           
            setValues({...allValues,loader:true})
            const token = Cookies.get("myToken")
            const api = "https://apis.ccbp.in/profile"

            const option ={
                method:"Get",
                headers:{
                  Authorization : `Bearer ${token}`
                }
            }
           try {
            const response = await fetch(api,option)
            const data = await response.json()
            console.log(data)
            if(response.ok){
                setValues({...allValues,userProfile:data.profile_details,loader:false})
            }
            else{
                 setValues({...allValues,loader:false})
            }
           } catch (error) {
            console.log(error)
           }
        }

        userProfile()
    },[])

    const UserProfile =()=>(
        <div>
        {allValues.loader?(
            <div className='userLoader'>
            <div className="spinner-grow text-primary" role="status">
  <span className="sr-only">Loading...</span>
</div>
</div>
        ):
        (<div className='userProfile-card shadow' >
            <img src={allValues.userProfile.profile_image_url} /><br/><br/>
            <h3 style={{color:"white"}}>{allValues.userProfile.name}</h3>
            <p style={{color:"white"}}>{allValues.userProfile.short_bio}</p>
        </div>)
        }
        </div>
    )
    
    const EmployeType=()=>{

       const onSetEmpType =(e)=>{

        if(e.target.checked){
               setMyValues({...allMyValues,empType:[...allMyValues.empType,e.target.value]})
        }else{
              setMyValues({...allMyValues,empType:allMyValues.empType.filter(each=> each !==e.target.value)})
        }
            
       }
        return(
            <div className='emp-cont shadow'>
                <h3>Employment Type :</h3>
            <ul style={{listStyle:"none"}}>

              {
                empArr.map(each => 
                    <li key={each.id}>
                        <input onChange={onSetEmpType} value={each.id} id={each.id} type="checkbox" />
                        
                        <label className='ml-3' htmlFor={each.id}>{each.label}</label>
                    </li>
                )
              }
            </ul>
            </div>
        )
    }

    const SalleryType=()=>{
       
        const onChengeSalType =(e)=>{
           
                setMyValues({...allMyValues,salType:e.target.value})
                    console.log(e.target.value)
           
        }

        return(
        <div className='salary-cont shadow'> 
        <h3>Sallary Range :</h3>
            <ul style={{listStyle:"none"}}>
               
                {
                    salleryArr.map(each=>
                        <li key={each.id}>
                            <input onChange={onChengeSalType} value={each.id} name='sallay'  id={each.id} type="radio"/>
                            <label name='sallay'  className='ml-3' htmlFor={each.id}>{each.label}</label>
                        </li>
                    )
                }
            </ul>
        </div>
        )
    }

    return(
        <>
       <div>
        {UserProfile()}
       <br/>
       {EmployeType()}
       <br/>
       {SalleryType()}
       </div>
       </>
       

    )
}
export default FilterJobSection;