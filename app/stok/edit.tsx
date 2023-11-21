"use client"
import React, { SyntheticEvent, use } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

    type Stok = {
        id: number;
        menu: string;
        jumlah: number;
      }

const API_URL = 'http://127.0.0.1:8000/api'
const EditStok = (stok: Stok) => {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(stok.menu)
  const [jumlah, setJumlah] = useState(stok.jumlah)
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsMutating(true);
    let endpoint = `${API_URL}/stok/${stok.id}`;
     const data = { menu: menu, jumlah: jumlah }
    await axios.patch(endpoint, data);
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
          <h3 className="font-bold text-lg">Edit Jenis</h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control">
            <label className="label font-bold">Name Menu</label>
              <input
                type="text"
                value={menu}
                onChange={(e) => setMenu(e.target.value)}
                className="input w-full input-bordered"
                placeholder="Name Category"
              />

              <label className="label font-bold">Jumlah</label>
              <input
                type="text"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
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

export default EditStok