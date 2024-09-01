import { useProductContextHook } from "../context/product.context";

const Filter = () => {
    const { filterCata, handleFilter, onClearFilter } = useProductContextHook();

    return (
        <>
            <div className="flex flex_row flex_center gap-3">
                <p className="m-0">Filter : </p>
                <div className={`btn btn-outline-dark ${filterCata.includes("men's clothing") ? "btn-dark text-white" : ""}`}  onClick={() => handleFilter("men's clothing")}>Men</div>
                <div className={`btn btn-outline-dark ${filterCata.includes("women's clothing") ? "btn-dark text-white" : ""}`} onClick={() => handleFilter("women's clothing")}>Women</div>
                <div className={`btn btn-outline-dark ${filterCata.includes("jewelery") ? "btn-dark text-white" : ""}`} onClick={() => handleFilter('jewelery')}>Jewelery</div>
                <div className={`btn btn-outline-dark ${filterCata.includes("electronics") ? "btn-dark text-white" : ""}`} onClick={() => handleFilter('electronics')}>Electronics</div>

                <div className="btn btn-outline-danger" onClick={() => onClearFilter()}>Clear</div>
            </div>
        </>
    )
}

export default Filter;