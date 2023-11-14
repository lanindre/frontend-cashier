'use client'
import React, {SyntheticEvent, use} from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const API_URL = 'http://127.0.0.1:8000/api/category'
const AddCategory = () => {
  const [modal, setModal] = useState(false)
  const [name, setName] = useState("")
  const router = useRouter()
  const handleChange = () => setModal(!modal)
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    let endpoint = `${API_URL}/category`
    const data = { nama: name}
    await axios.post(endpoint, data);
    setName('')
    router.refresh()
    setModal(false)
  }
  return (
    <div>
    <button className="btn" onClick={handleChange}>
      Add New
    </button>

    <input
      type="checkbox"
      checked={modal}
      onChange={handleChange}
      className="modal-toggle"
    />
      <div className='modal'>
          <div className='modal-box'>
              <h3 className='font-bold text-lg'>ADD NEW CATEGORY</h3>
              <form onSubmit={handleSubmit}>
                  <div className='form-control'>
                      <label className='label-font-bold'>Name</label>
                      <input 
                          type="text"
                          name=""
                          id=""
                          className="input w-full input-bordered"
                          placeholder="Name Category"
                      />
                  </div>
                  <div className='modal-action'>
                      <button type='button' className='btn'>
                          Close
                      </button>
                      <button type='submit' className='btn btn-primary'>
                          Submit
                      </button>
                  </div>
              </form>
          </div>
      </div>
      </div>
  )
}

export default AddCategory;