import React from 'react'
import {useParams} from "react-router-dom"
import { useDocument } from '../../hooks/useDocument'
import ArticleComments from './ArticleComments'

import "./Article.css"
function Article() {
     const {id } = useParams()
     const {error,document} = useDocument("articles",id)
     console.log(document)
     if(error){
        return <div>{error}</div>
     }
     if(!document){
        return <div>loading...</div>
     }
  return (
    <div className="">
      <div class="article-card">
    <h1 class="article-title">The Impact of Centralized Platforms on Academic Projects</h1>
    
    <div class="author-section">
      <img src={document.createdBy.photoURL} alt="Author Image" class="author-image"/>
      <div class="author-details">
        <p class="author-name">{document.createdBy.username}</p>
        <p class="post-date"> 2nd November 2024</p>
      </div>
    </div>

    <p class="article-description">
        A centralized platform for academic projects holds the potential to greatly enhance the educational ecosystem by fostering collaboration and accessibility across institutions. Such a platform would allow students to share their academic projects, past exam papers, and comprehensive notes, creating a valuable knowledge base that transcends the boundaries of individual colleges. By promoting peer-to-peer learning, this resource could bridge diverse academic communities and encourage students to learn from each other's experiences and research.

        This shared environment would not only promote innovation but also inspire cross-disciplinary research. For example, engineering students could benefit from collaborating with peers in fields like design, business, or humanities, thereby gaining a broader perspective on their projects. The platform could serve as a hub for interdisciplinary research and a catalyst for fresh ideas.
        
        Additionally, such a platform would enable students to gain insights into different academic standards and methodologies, raising the bar for academic excellence across Indian universities. By facilitating these connections, the platform could open up new academic and career pathways for students, making Indian academia a more collaborative, dynamic, and high-achieving environment.
    </p>
   <ArticleComments article={document}/>
    
  </div>
    
    </div>
  )
}

export default Article