import React from 'react'
import {useParams} from 'react-router-dom'
import { useDocument } from '../../hooks/useDocument'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import "./Project.css"
export const Project = () => {
    const {id} = useParams()
    const {error,document} = useDocument("projects",id)
    if(error){
        return <div>{error}</div>
     }
     if(!document){
        return <div>loading...</div>
     }
  return (
    <div class="article-card">
    <h1 class="article-title"> {document.title}</h1>
    
    <div class="author-section">
      <img src={document.createdBy.photoURL} alt="Author Image" class="author-image"/>
      <div class="author-details">
        <p class="author-name">{document.createdBy.username}</p>
        <p class="post-date">Posted on: November 2, 2024, at 10:30 AM</p>
      </div>
    </div>

    <p class="article-description">
        EduConnect Hub is Link centralized digital platform designed to bridge academic communities across universities and colleges by enabling students to share their projects, research papers, study notes, and previous exam papers. The platform’s mission is to foster Link collaborative environment where students from diverse fields and institutions can learn from each other’s work, thereby encouraging peer-to-peer learning and cross-functional research.

EduConnect Hub allows users to browse projects by category, institution, or subject area, making it easy to find relevant resources and connect with like-minded peers. By providing an accessible repository of academic materials, EduConnect Hub aims to break down institutional boundaries, empowering students to explore knowledge beyond their own college walls. The platform also promotes interdisciplinary collaboration, where students from various domains, like engineering, business, design, and the arts, can contribute unique insights to projects across fields.

Through Link system of peer reviews, ratings, and comments, students can receive feedback to enhance their projects and improve academic standards. EduConnect Hub aspires to raise the quality of learning in Indian academia by opening new academic and career pathways, ultimately preparing students to make impactful contributions in their chosen fields.
    </p>


     <p class="project-description">
        EduConnect Hub is Link centralized digital platform designed to bridge academic communities across universities and colleges by enabling students to share their projects, research papers, study notes, and previous exam papers. The platform’s mission is to foster Link collaborative environment where students from diverse fields and institutions can learn from each other’s work, thereby encouraging peer-to-peer learning and cross-functional research.
      </p> 
      <a href={document.link} class="github-button" target="_blank">View on GitHub</a>
      

    {/* <!-- Comment Section --> */}
    <div class="comment-section">
      <h3 class="comment-title">Comments</h3>

      {/* <!-- Displayed Comments --> */}
      <div class="comment">
        <p class="comment-author">{document.createdBy.username}</p>
        <p class="comment-text">This article is insightful and highlights the need for collaboration across academic institutions. Great work!</p>
      </div>

      {/* <!-- Comment Form --> */}
      <form class="comment-form">
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="name" required/>
        
        <label for="comment">Your Comment:</label>
        <textarea id="comment" name="comment" rows="4" required></textarea>
        
        <button type="submit">Post Comment</button>
      </form>
    </div>
  </div>
  )
}
