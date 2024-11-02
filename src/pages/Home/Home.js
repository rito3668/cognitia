import React from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import "./Home.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function Home() {
    const {user } =useAuthContext()
   
  return (
    <div>
    <div class="container">
    {/* <!-- Left Side (Image) --> */}
    {/* <div class="left-side">
        <img src="women.jpg" alt="Educational Image"/>
    </div> */}

    {/* <!-- Right Side (Description) --> */}
    <div class="right-side">
        <h1>About Our Website</h1>
        <p>Welcome to our educational platform! The aim of this project is to create a centralized digital platform where students from universities and colleges across India can showcase their academic projects, share resources like previous year exams, and exchange study notes. This platform will serve as a repository for student-created work, bridging academic communities nationwide and fostering a collaborative learning environment.

            By offering a unified space for students to display their projects, we aim to promote peer learning, as students can explore various fields and gain insights into each other's work. This exposure to diverse project topics can spark innovation, inspire interdisciplinary research, and motivate students to pursue new academic and practical challenges. Additionally, providing access to resources such as previous year question papers and study notes will allow students to better prepare for exams and deepen their subject understanding.
            
            In the long term, this platform could enhance the overall academic experience by facilitating cross-functional research and enabling students to build connections beyond their institutions. It will also help universities and colleges gain recognition for the accomplishments of their students, thereby raising academic standards and supporting career advancement. Ultimately, this platform will contribute to building a culture of continuous learning, innovation, and excellence across Indian academia.</p>
    </div>
</div>

{/* <!-- Links Section --> */}
<div class="links-section">
    <div class="link-box">
        <h2>New Projects</h2>
       
        <a href="#">View Projects</a>
       <br /> <a href="https://github.com/rito3668/money-app/">Study OS</a> <br /><a href="">Study Calculus</a><br /><a href="https://github.com/rito3668/money-app">Study DLD</a><a href="https://github.com/rito3668/money-app">Study Geomtrey</a><br />
        <a href="https://github.com/rito3668/money-app">Study Grammar</a>
    </div>
    <div class="link-box">
        <h2>New Articles</h2>
        <a href="#">Read Articles</a><br />
        <a href="http://localhost:3000/articles/4wXRKnhraATiNnzW2MLd">Study OS</a> <br /><a href="">Study Calculus</a><br /><a href="http://localhost:3000/articles/4wXRKnhraATiNnzW2MLd">Study DLD</a><a href="http://localhost:3000/articles/4wXRKnhraATiNnzW2MLd">Study Geomtrey</a><br />
        <a href="http://localhost:3000/articles/4wXRKnhraATiNnzW2MLd">Study Grammar</a>
    </div>
    <div class="link-box">
        <h2>PDF Uploads</h2>
        <a href="#">View Previous Year questions</a>
        <div children="d-block">
        <a href="https://upsc.gov.in/examinations/previous-question-papers">NIT Meghalaya(dbms)</a><br /><a href="https://upsc.gov.in/examinations/previous-question-papers">NIT Nagaland(os)</a><br /><a href="https://upsc.gov.in/examinations/previous-question-papers">NIT Nagaland(oops)</a><a href="https://upsc.gov.in/examinations/previous-question-papers">NIT silchar(dld)</a>
        </div>
    </div>
</div>

{/* <!-- Footer/ Section --> */}
<footer>
    <p>&copy; 2024 Your Website Name. All rights reserved.</p>
    <div class="footer-content">
        <div>
            <h3>Contact Us</h3>
            <p>Email: info@yourwebsite.com</p>
            <p>Phone: +91 1234567890</p>
        </div>
        <div>
            <h3>Quick Links</h3>
            <a href="#profile">ProfileID</a><br/>
            <a href="#projects">Projects</a><br/>
            <a href="#contribution">Contribution</a>
        </div>
        <div>
            <h3>Follow Us</h3>
            <a href="#">Facebook</a><br/>
            <a href="#">Twitter</a><br/>
            <a href="#">LinkedIn</a>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Home

  
