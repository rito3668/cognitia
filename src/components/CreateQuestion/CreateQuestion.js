import React, { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'
import { projectStorage } from '../../firebase/config'
import {useHistory } from "react-router-dom"
export default function CreateQuestion() {
  const [pdf,setPdf] = useState(null)
  const [pdfErr,setPdfErr] = useState("")
  const {user} = useAuthContext()
  const history = useHistory()
  const handleFileChange = async(e) => {
    
    let selected = e.target.files[0]
    // console.log(selected.type)

    if (!selected) {
      setPdfErr('Please select a file')
      return
    }
    if (!selected.type.includes('pdf')) {
      setPdfErr('Selected file must be a pdf')
      return
    }
   
     const uploadPath = `questions/${user.uid}/${selected.name}`
      const pdff =  await projectStorage.ref(uploadPath).put(pdf)
     
      const pdfURL= await pdff.ref.getDownloadURL()
      console.log(pdfURL)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // signup(email, password, displayName, thumbnail)
    history.push("/")
  }
  return (
    <div class="bg-white p-8 rounded-lg shadow-md w-full ml-[450px] max-w-md justify-center ">
    <h2 class="text-2xl font-bold text-gray-800 mb-6 text-center">Submit your Question Paper(PDF format)</h2>
    <form  class="space-y-6" onSubmit={handleSubmit}>
      
      {/* <!-- Article Name --> */}
      <div>
        <label for="articleName" class="block text-sm text-left font-medium text-gray-700">Semester No.</label>
        <input type="text" id="articleName" name="articleName" required
               class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500" />
      </div>

      {/* <!-- Article Body --> */}
      <div>
        <label for="articleBody" class="block text-sm  text-left font-medium text-gray-700">Course Name</label>
        <textarea id="articleBody" name="articleBody" rows="6" required
                  class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500" ></textarea>
      </div>
      <div>
        <label for="articleName" class="block text-sm text-left font-medium text-gray-700">Semester No.</label>
        <input type="file" id="articleName" name="articleName" required
               class="mt-1 p-2 border border-gray-300 rounded-md w-full focus:ring-blue-500 focus:border-blue-500" onChange={handleFileChange}/>
               {pdfErr&&<div>{pdfErr}</div>}
      </div>
      {/* <!-- Submit Button --> */}
      <div class="text-center">
        <button type="submit"
                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Submit Question Paper
        </button>
      </div>
    </form>
  </div>
  )
}
