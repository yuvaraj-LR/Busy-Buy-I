import CartTable from "../components/CartTable";
import Empty from "../components/Empty";
import { useProductContextHook } from "../context/product.context";

const Cart = () => {
    const {productData} = useProductContextHook();

    return(
        <>
            {productData ?
                <div className="wrapper my-3">
                    <CartTable data={productData} />

                    <div className="text-end w-100 buy_btn">
                        <button className="btn btn-danger">Buy Now</button>
                    </div>
                </div> :
                <Empty text="No items in cart" />
            }
        </>
    )
}

export default Cart;