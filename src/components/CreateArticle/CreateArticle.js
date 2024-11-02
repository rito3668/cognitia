import React, { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import {useHistory} from "react-router-dom"
import { useFirestore } from '../../hooks/useFirestore'
function CreateArticle() {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [formError,setFormError] = useState(null)
    const {addDocument,response} = useFirestore("articles")
    const history = useHistory()
    const {user } = useAuthContext()
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setFormError(null)
        console.log(title,body,user.displayName,user.uid)
        const createdBy = {
            username:user.displayName,
            photoURL:user.photoURL,
            id:user.uid
        }
        const article = {
            title,
            body,
            createdBy,
            comments:[]
            
        }
        await addDocument(article)
        if(!response.error)history.push(`/users/${user.uid}`)
    }
    
  return (
    <div class="bg-white p-8 rounded-lg shadow-md w-full ml-[450px] max-w-md justify-center ">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Submit an Article</h2>
    <form  class="space-y-6" onSubmit={handleSubmit}>
      
      {/* <!-- Article Name --> */}
      <div>
        <label for="articleName" class="block text-sm text-left font-medium text-gray-700">Article Name</label>
        <input type="text" id="articleName" name="articleName" required
               class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"  value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>

      {/* <!-- Article Body --> */}
      <div>
        <label for="articleBody" class="block text-sm  text-left font-medium text-gray-700">Article Body</label>
        <textarea id="articleBody" name="articleBody" rows="6" required
                  class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
      </div>

      {/* <!-- Submit Button --> */}
      <div class="text-center">
        <button type="submit"
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit Article
        </button>
      </div>
    </form>
  </div>
  )
}

export default CreateArticle