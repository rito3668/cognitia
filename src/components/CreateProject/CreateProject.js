import React from 'react'
import { useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'
import {useHistory} from "react-router-dom"
import { useAuthContext } from '../../hooks/useAuthContext'
import Select from 'react-select'
export default function CreateProject() {
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const [cat,setCat] = useState(null)
  const [formError,setFormError] = useState(null)
  const [link,setLink] = useState("")
  const {addDocument,response} = useFirestore("projects")
  const history = useHistory()
  const {user } = useAuthContext()
  const handleSubmit = async(e)=>{
      e.preventDefault()
      setFormError(null)

      const createdBy = {
        username:user.displayName,
        photoURL:user.photoURL,
        id:user.uid
    }
      const project = {
        title,
        body,
        link,
        category:cat.value,
        createdBy,
        comments:[]
      }
      // console.log(project)
      await addDocument(project)
      if(!response.error)history.push("/")
  }
  const options = [
    { value: 'aiml', label: 'AI/ML' },
    { value: 'frontend', label: 'Frontend WebDEV' },
    { value: 'backend', label: 'Backend WebDEV'  },
    { value: 'fullstack', label: 'Fullstack WebDEV' },
    { value: 'android', label: 'Android Dev' }
  ]
  return (
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md ml-[500px]">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Submit your Personal Project</h2>
    <form  class="space-y-6 " onSubmit={handleSubmit}>
      
      {/* <!-- Article Name --> */}
      <div className='text-center'>
        <label for="articleName" class="block text-sm text-left font-medium text-gray-700">Project Name</label>
        <input type="text" id="articleName" name="articleName" required
               class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"  value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </div>

      {/* <!-- Article Body --> */}
      <div>
        <label for="articleBody" class="block text-sm  text-left font-medium text-gray-700">Project Description(MIN 200 words)</label>
        <textarea id="articleBody" name="articleBody" rows="6" required
                  class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500" value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
      </div>
      <div>
      <label for="articleBody" class="block text-sm  text-left font-medium text-gray-700">Project Category</label>
        <Select options={options} onChange={(option)=>setCat(option)}/>
      </div>
      <div>
      <label for="articleBody" class="block text-sm  text-left font-medium text-gray-700">Github Repo</label>
      <input type="text" id="articleName" name="articleName" required
               class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500"  value={link} onChange={(e)=>setLink(e.target.value)}/>
      </div>
      {/* <!-- Submit Button --> */}
      <div class="text-center">
        <button type="submit"
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit Project
        </button>
      </div>
    </form>
  </div>
  )
}
