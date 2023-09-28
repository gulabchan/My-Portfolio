import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section class="timeline-section">
      <h5>Timeline of education</h5>
      <h2>Education</h2>
	<div class="timeline-items">
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">AUG 2020- JULY 2024</div>
			<div class="timeline-content">
			{/* CGPA: 7.62 / 10 */}
			CGPA: 7.62 / 10
				<h3>Bachelor of Technology</h3>
				<p>I'm pursuing a <b>Bachelor of Technology</b> in <b>Computer Science and Engineering</b>from <b>LOVELY PROFESSIONAL UNIVERSITY</b>  Phagwara,Punjab, India. </p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2020</div>
			<div class="timeline-content">
			Percentage: 72.6 %
				<h3>HIGHER SECONDARY SCHOOL</h3>
				<p>Pursued <b>HIGHER SECONDARY SCHOOL</b> from <b>Prayag Senior Secondary School, Gopalganj</b> </p>
			</div>
		</div>
		<div class="timeline-item">
			<div class="timeline-dot"></div>
			<div class="timeline-date">2017</div>
			<div class="timeline-content">
			CGPA: 09.6 / 10
				<h3>Secondary High School</h3>
				<p>Pursued <b>Secondary High School</b> from <b>Galaxy Residential Public School, Chhapra</b></p>
			</div>
		</div>
	</div>
</section>

  )
}

export default Education
