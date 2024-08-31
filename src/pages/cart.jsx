import CartTable from "../components/CartTable";
import Empty from "../components/Empty";
import { useProductContextHook } from "../context/product.context";

const Cart = () => {
    const {productData, handleClear, handleBuyNow} = useProductContextHook();

    return (
        <>
            <div className="wrapper my-3">
                {
                    productData.cartItem && productData.cartItem.length > 0 ? (
                        <>
                            <CartTable data={productData} /> 
                            <div className="text-end w-100 buy_btn">
                                <button className="btn btn-outline-danger mx-4" onClick={() => handleClear()}>Clear All</button>
                                <button className="btn btn-danger" onClick={() => handleBuyNow()}>Buy Now</button>
                            </div> 
                        </>
                    ) : (
                        <Empty text="No items in cart" />
                    )
                }
            </div>
        </>
    );
}

export default Cart;