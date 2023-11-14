export const metadata = {
    title: "Produk",
}

import axios from 'axios'
import Link from 'next/link'

type Produk = {
    id:number;
    category_id: number;
    nama_produk: string;
    price: number;
    stok: number;
    tag: string;
    image: string;

}
const getProduk = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/produk');
    return res.data.data
}
const ProdukList = async () => {
    const produk: Produk[] = await getProduk();
    return (
        <div>
            ProdukList
            <table>
                <thead>
                    <th>No</th>
                    <th>Kategori</th>
                    <th></th>
                </thead>
                <tbody>
                {produk.map((produk, index ) => (
                    <tr>
                        
                    </tr>
                // <Link href={`/produk/${produk.id}`} key={produk.id}>
                //     <li>{produk.category_id}</li>
                //     <li>{produk.nama_produk}</li>
                //     <li>{produk.price}</li>
                //     <li>{produk.stok}</li>
                //     <li>{produk.tag}</li>
                //     <li>{produk.image}</li>
                // </Link>
            ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProdukList