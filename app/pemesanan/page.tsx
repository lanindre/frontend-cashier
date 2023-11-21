export const metadata = {
    title: "Pemesanan",
  }
  import axios from 'axios'
  import Link from 'next/link'
  import AddCategory from './add'
  import DeleteCategory from './delete'
  import EditCategory from './edit'
import AddPemesanan from './add'
import DeletePemesanan from './delete'
import EditPemesanan from './edit'
  
  type Pemesanan = {
    id: number;
    meja: string;
    tanggal_pemesanan: string;
    jam_mulai: string;
    jam_selesai: string;
    nama_pemesan: string;
    jumlah_pelanggan: string;
  }
  const getPemesanan = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/pemesanan");
  
    return res.data.data
  }
  const  PemesananList = async () => {
    const pemesanan: Pemesanan[] = await getPemesanan()
    return (
      <div className="py-10 px-10">
      <h1>Pemesanan</h1>
        <div className="py-2">
          <AddPemesanan />
        </div>
        <table className="table table-zebra">
          <thead>
            <tr className="bg-base-200">
              <th>No.</th>
              <th>Meja</th>
              <th>Tanggal Pemesanan</th>
              <th>Jam Mulai</th>
              <th>Jam Selesai</th>
              <th>Nama Pemesan</th>
              <th>Jumlah Pelanggan</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pemesanan && pemesanan.map((pemesanan, index) => (
              <tr key={pemesanan.id}>
                <td>{index + 1}</td>
                <td>{pemesanan.meja}</td>
                <td>{pemesanan.tanggal_pemesanan}</td>
                <td>{pemesanan.jam_mulai}</td>
                <td>{pemesanan.jam_selesai}</td>
                <td>{pemesanan.nama_pemesan}</td>
                <td>{pemesanan.jumlah_pelanggan}</td>
                <td className="flex">
                  <div className="mr-1">
                    <EditPemesanan {...pemesanan} />
                  </div>
  
                  <DeletePemesanan {...pemesanan}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default PemesananList;
  