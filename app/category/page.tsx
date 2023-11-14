import axios from "axios";
import AddCategory from "./add";

export const metadata = {
    title: "Category",
}

type Category = {
    id: number;
    nama: string;
}

async function getCategory() {
    const res = await axios.get('http://127.0.0.1:8000/api/category')
    return res.data.data;
}

export default async function CategoryList() {
    const category: Category[] = await getCategory();
  return (
    <div className="py-10 px-10">
        <div className="py-2">
            <AddCategory />
        </div>
        <table className="table w-full">
            <thead>
                <tr>
                    <th>No</th>
                    <th>category name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {category.map((category, index ) => (
                <tr key={category.id}>
                    <td>{index + 1}</td>
                    <td>{category.nama}</td>
                    <td>Edit | Hapus</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}