"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import AddStok from "./add";

type Stok = {
    id: number;
    menu: string;
    jumlah: number;
  }

const API_URL = "http://127.0.0.1:8000/api";
const DeleteStok = (stok: Stok) => {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState("")
  const [jumlah, setJumlah] = useState("")
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleDelete = async (stokId : Number) => {
    setIsMutating(true);
    let params = {id_stok : stokId}
    let endpoint = `${API_URL}/stok/${stokId}`;
    const data = { menu: menu, jumlah: jumlah }
    await axios.delete(endpoint)
    setIsMutating(false);
    router.refresh();
    setModal(false);
  };
  return (
    <div>
      <button className="btn" onClick={handleChange}>
        Delete
      </button>
      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are sure to delete {stok.menu} ?
          </h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                onClick={() => handleDelete(stok.id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            ) : (
              <button type="button" className="btn loading">
                Delete loading ...
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteStok;