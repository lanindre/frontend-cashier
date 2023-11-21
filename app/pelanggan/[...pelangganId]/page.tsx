const PelangganDetail = ({ params } : {params: { elangganId: string}}) => {
    return <div> Pelanggan {params.elangganId[1]}</div>;
};
export default PelangganDetail