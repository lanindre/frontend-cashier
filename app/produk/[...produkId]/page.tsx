const ProdukDetail = ({ params } : {params: { produkId: string}}) => {
    return <div> Produk {params.produkId[1]}</div>;
};
export default ProdukDetail