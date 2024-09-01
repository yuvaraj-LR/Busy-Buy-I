import CartTableRow from "./CartTableRow";

const OrderTable = (data) => {
    const orderedData = data.data;

    return (
        <>
            {orderedData.map(item => (
                <>
                    <h5 className="my-4 text-center" style={{textDecoration: "underline"}}><span className="bold">
                    Ordered On:</span> {item.data}</h5>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item?.cartItem?.map((data, i) => (
                                <tr className="cart_table_row" key={i}>
                                    <CartTableRow data={data} index={i} fromOrderTable={true}/>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="text-end w-100">
                        <h4 className="flex flex_space_between total_count">
                            <span>TOTAL</span> &nbsp;&nbsp;
                            <span>&#x20b9;{item.cartPriceCount}</span>
                        </h4>
                    </div>
                </>
            ))}
        </>
    )
}

export default OrderTable;