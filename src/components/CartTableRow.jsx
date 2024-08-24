
const CartTableRow = (data) => {

    const {id, title, price, image} = data.data;
    const {count} = data;

    return (
        <>
            <th scope="row">{id}</th>
            <td><img src={image} alt={title} className="cart-img"/></td>
            <td>{title}</td>
            <td className="text-center">
                <span><i className="fa-solid fa-circle-minus"></i></span>
                <span>{count}</span>
                <span><i className="fa-solid fa-circle-plus"></i></span>
            </td>
            <td>&#x20b9;{price}</td>
        </>
    )
}

export default CartTableRow;