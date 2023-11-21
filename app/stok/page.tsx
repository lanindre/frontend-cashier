export const metadata = {
    title: "Stok",
  }
  import axios from 'axios'
  import Link from 'next/link'
  import AddMenu from './add'
import DeleteStok from './delete'
import EditStok from './edit'
  
  type Stok = {
    id: number;
    menu: string;
    jumlah: number;
  }

  const getStok = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/stok");
  
    return res.data.data
  }
  const  StokList = async () => {
    const stok: Stok[] = await getStok()
    return (
      <div className="py-10 px-10">
      <h1>Stok</h1>
        <div className="py-2">
          <AddMenu />
        </div>
        <table className="table table-zebra">
          <thead>
            <tr className="bg-base-200">
              <th>No.</th>
              <th>Nama Menu</th>
              <th>Stok</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {stok && stok.map((stok, index) => (
              <tr key={stok.id}>
                <td>{index + 1}</td>
                <td>{stok.menu}</td>
                <td>{stok.jumlah}</td>
                <td className="flex">
                  <div className="mr-1">
                    <EditStok {...stok} />
                  </div>
  
                  <DeleteStok {...stok} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default StokList;
  