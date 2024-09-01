import { useProductContextHook } from "../context/product.context";

const Filter = () => {
    const {setMenCata, setWomenenCata, setJewelCata, setElectronicsCata} = useProductContextHook();

    return (
        <>
            <div className="flex flex_row gap-3">
                <div className="btn btn-outline-dark" onClick={() => setMenCata()}>Men</div>
                <div className="btn btn-outline-dark" onClick={() => setWomenenCata()}>Women</div>
                <div className="btn btn-outline-dark" onClick={() => setJewelCata()}>Jewellary</div>
                <div className="btn btn-outline-dark" onClick={() => setElectronicsCata()}>Electronics</div>
                <div className="btn btn-primary">Filter</div>
            </div>
        </>
    )
}

export default Filter;