const PemesananDetail = ({ params } : {params: { pemesananId: string}}) => {
    return <div> Pemesanan {params.pemesananId[1]}</div>;
};
export default PemesananDetail