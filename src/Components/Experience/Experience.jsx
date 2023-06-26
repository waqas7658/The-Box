import React from 'react'
import '../Experience/Experience.css'
import hand from "../Images/illus.png"
import project from '../Images/project completed.png'
import award from '../Images/award.png'
import bussiness from '../Images/year of bussiness.png'

const Experience = () => {
  return (
    <>
    <div className="experience">
     <div className="container">
        <div className="row">
            <div className="col-md-8">
                
                {/* div for client */}
                <div className="client">
                    <img src={hand} alt="hand img" className='img_client' />
                    <h1 className='experience_h1'>84</h1>
                
                    <div className='bullet'></div>
                    <p className='exp_p'>Happy Client</p>
               
                </div>


                {/* div for project completed */}


                <div className="project">
                    <img src={project} alt="project completed" className='img_project' />
                <h1 className='experience_h1'>123</h1>
                <div className='bullet mx-2'></div>
                <p className='exp_p'>Project Completed</p>

                    
                </div>

                {/* div for award win */}

                <div className="award">
                    <img src={award} alt="award" className='img_award' />
                <h1 className='experience_h1'>123</h1>
                <div className='bullet mx-2'></div>
                <p className='exp_p'>Award Win</p>

                    
                </div>
                {/* div for years in bussiness */}

                <div className="bussiness">
                    <img src={bussiness} alt="bussiness" className='img_bussiness' />
                <h1 className='experience_h1'>123</h1>
                <div className='bullet mx-2'></div>
                <p className='exp_p'>Project Completed</p>

                    
                </div>


            </div>
            <div className="col-md-4 col-sm-4">
                <div>
                    <h2 className='experience_heading'>30 Years Experience</h2>
                    <p className='experience_p'>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
                    <button className='button_contact'>Contact Us</button>
                </div>
               
            </div>
        </div>
     </div>
     </div>
    </>
  )
}

export default Experience
