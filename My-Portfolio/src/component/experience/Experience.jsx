import React from 'react'
import './experience.css';
import { BsFillPatchCheckFill  } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Technical Knowledge</h2>

      <div className="container experience__container">
        
        <div className="experience__frontend">
          <h3>Web Development & Programming Lang.</h3>
          <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>c/c++</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
        
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
           <div>
           <h4>Bootstrap</h4>
            <small className='text-light'>Beginner</small>
           </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>ReactJs</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Chakra UI</h4>
            <small className='text-light'>Beginner</small>
          </div>          
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Express.js</h4>
            <small className='text-light'>Beginner</small>
          </div>          
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Java</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>OOPS</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          
          
          
          </div>
        </div>
        
        <div className="experience__backend">
        <h3>Backend Development & TOOLS/PLATFORMS</h3>
        <div className="experience__content">
        <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Node.js</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            </article>
          
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
           <div>
           <h4>MongoDb</h4>
            <small className='text-light'>Intermediate</small>
           </div>
           </article>
         
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Git/GitHub</h4>
            <small className='text-light'>Intermediate</small>
          </div>          
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Core Subjects</h4>
            <small className='text-light'>Intermediate</small>
           </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>MYSQL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>PHP</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>LARAVEL</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Wordpress</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Adobe Photoshop</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className="experience__details">
            <BsFillPatchCheckFill  className="experience__details-icon" />
            <div>
            <h4>Postman</h4>
            <small className='text-light'>Intermediate</small>
            </div>
          </article>
          
          
          
          
          </div>
        </div>
        

      </div>
    </section>
  )
}

export default Experience