"use client";
import React, { SyntheticEvent, use } from "react";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Menu = {
    id: number;
    name: string;
    harga: number;
    image: string;
    deskripsi: string;
    jenis: string;
  }

const API_URL = "http://127.0.0.1:8000/api";
const DeleteMenu = (menu: Menu) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("")
  const [harga, setHarga] = useState("")
  const [image, setImage] = useState("")
  const [deksripsi, setDeskripsi] = useState("")
  const [jenis, setJenis] = useState("")
  const [isMutating, setIsMutating] = useState(false);
  const router = useRouter();
  const handleChange = () => setModal(!modal);
  const handleDelete = async (menuId : Number) => {
    setIsMutating(true);
    let params = {id_menu : menuId}
    let endpoint = `${API_URL}/menu/${menuId}`;
    const data = { name: name, harga: harga, image:image, deksripsi:deksripsi, jenis:jenis }
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
            Are sure to delete {menu.name} ?
          </h3>
          <div className="modal-action">
            <button type="button" className="btn" onClick={handleChange}>
              Close
            </button>
            {!isMutating ? (
              <button
                type="button"
                onClick={() => handleDelete(menu.id)}
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

export default DeleteMenu;
