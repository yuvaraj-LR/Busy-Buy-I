import CartTableRow from "./CartTableRow";

const OrderTable = (data) => {
    const orderedData = data.data;
    console.log(orderedData, "orderedDataaaa...");

    return (
        <>
            {orderedData.map(item => {
                <>
                    <h3>Ordered On: {item.date}</h3>

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
                            {/* {item?.cartItem?.map((data, i) => (
                                <tr className="cart_table_row" key={i}>
                                    <CartTableRow data={data} index={i}/>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>

                </>
            })}
        </>
    )
}

export default OrderTable;