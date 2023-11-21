const StokDetail = ({ params } : {params: { stokId: string}}) => {
    return <div> Menu {params.stokId[1]}</div>;
};
export default StokDetail