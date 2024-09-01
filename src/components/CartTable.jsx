import CartTableRow from "./CartTableRow";

const CartTable = (data) => {
    return(
        <>
            <table className="table table-striped bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.cartItem.map((data, i) => (
                        <tr className="cart_table_row" key={i}>
                            <CartTableRow data={data} index={i}/>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default CartTable;