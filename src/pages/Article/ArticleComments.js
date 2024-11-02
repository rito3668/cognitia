import React from 'react'
import { useState } from 'react'
import {timestamp} from '../../firebase/config'
import { useAuthContext } from "../../hooks/useAuthContext"
import { useFirestore } from "../../hooks/useFirestore"
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import "./ArticleComments.css"
import Avatar from '../../components/Avatar/Avatar'
function ArticleComments({article}) {
    const [newComment,setNewComment] = useState('')
    const {user} = useAuthContext()
    const {updateDocument,response} = useFirestore("articles")
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const addComment = {
            displayName:user.displayName,
            photoURL:user.photoURL,
            content:newComment,
            createdAt:timestamp.fromDate(new Date()),
            id:Math.random()
        }
        await updateDocument(article.id,{
            comments:[...article.comments,addComment]
        })
        if(!response.error){
            setNewComment('')
        }
    }
  return (
    <div className="comment-section">

        <h4>Article Comments</h4>
        <ul>
            {article.comments.length>0 && article.comments.map(comment=>(
                <li key={comment.id}>
                    
                    <div className="comment">
        <p className="comment-author">{comment.displayName}</p>
        <p className="comment-text">{comment.content}</p>
      </div> 
                    
                </li>
            ))}
        </ul>
        <form className="comment-form mb-20" onSubmit={handleSubmit}>
        {/* <input type="text" id="name" name="name" required/> */}
        <textarea id="comment" name="comment" rows="4" required 
                    onChange={(e)=>setNewComment(e.target.value)}
                    value={newComment} > </textarea>
        <button type="submit">Post Comment</button>
      </form>
       
    </div>
  )
}

export default ArticleComments