import React from 'react'
import './portfolio.css'
import { data } from './data'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects ,Certifations & Certificate</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,img,title,Github,demo})=>{
            return(
              <article key={id} className="portfolio__items">
              <div className="portfolio__items-image">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={Github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article> 
            )
          })
        }


        
        
        

      </div>

    </section>

  )
}

export default Portfolio