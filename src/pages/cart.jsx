import CartTable from "../components/CartTable";
import Empty from "../components/Empty";
import { useProductContextHook } from "../context/product.context";

const Cart = () => {
    const {productData, cartPriceCount, handleClear, handleBuyNow} = useProductContextHook();

    return (
        <>
            <div className="wrapper my-3">
                {
                    productData.cartItem && productData.cartItem.length > 0 ? (
                        <>
                            <CartTable data={productData} /> 

                            <div className="text-end w-100">
                                <h4 className="flex flex_space_between total_count">
                                    <span>TOTAL</span> &nbsp;&nbsp;
                                    <span>&#x20b9;{cartPriceCount}</span>
                                </h4>
                            </div>

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