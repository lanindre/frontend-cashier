export const metadata = {
    title: "Produk",
}

import axios from 'axios'
import Link from 'next/link'

type Produk = {
    id:number;
    nama_produk: string;
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
            <ul>
            {produk.map((produk, index ) => (
                    <Link href={`/produk/${produk.id}`} key={produk.id}>
                        <li>{produk.nama_produk}</li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default ProdukList