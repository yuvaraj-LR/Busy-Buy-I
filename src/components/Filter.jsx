const Filter = () => {
    return (
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button">Action</button></li>
                    <li><button className="dropdown-item" type="button">Another action</button></li>
                    <li><button className="dropdown-item" type="button">Something else here</button></li>
                </ul>
            </div>
        </>
    )
}

export default Filter;