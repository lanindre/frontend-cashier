"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

type Jenis = {
  id: number;
  name: string;
  name_kategori: string;
};
const API_URL = 'http://127.0.0.1:8000/api'
const EditJenis = (jenis: Jenis) => {
  const [modal, setModal] = useState(false);``
  const [name, setName] = useState(jenis.name);
  const [name_kategori, setName_kategori] = useState(jenis.name_kategori);
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/jenis/${jenis.id}`;
    const data = { name: name , name_kategori: name_kategori  }
    await axios.patch(endpoint, data);
    setName("");
    setName_kategori("");
    setIsMutating(false);
    router.refresh();
    setModal(false);
  };
  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Edit
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Category</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
              <label className="label font-bold">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Name"
              />
              <label className="label font-bold">Name Kategori</label>
              <input
                type="text"
                value={name_kategori}
                onChange={(e) => setName_kategori(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Name Category"
              />
            </div>
            <div className="modal-action">
              <button type="button" className="btn" onClick={handleChange}>
                Close
              </button>
              {!isMutating ? (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              ) : (
                <button type="button" className="btn loading">
                  Submit loading ...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditJenis