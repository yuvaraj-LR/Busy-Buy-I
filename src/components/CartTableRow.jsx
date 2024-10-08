import { useProductContextHook } from "../context/product.context";

const CartTableRow = (data) => {
    const {title, price, image, count} = data.data;
    const {fromOrderTable, index} = data;

    const {addCart, removeCart} = useProductContextHook();

    return (
        <>
            <th scope="row">{index + 1}</th>
            {!fromOrderTable ? <td><img src={image} alt={title} className="cart-img"/></td> : <></> }
            <td>{title}</td>
            <td className="text-center">
                {!fromOrderTable ? <span className="pointer" onClick={() => removeCart(data.data)}><i className="fa-solid fa-circle-minus cart-icons"></i></span> : <></>}
                
                <span className="count">{count}</span>

                {!fromOrderTable ? <span className="pointer" onClick={() => addCart(data.data)}><i className="fa-solid fa-circle-plus cart-icons"></i></span> : <></>}
            </td>
            <td>&#x20b9;{price}</td>
        </>
    )
}

export default CartTableRow;