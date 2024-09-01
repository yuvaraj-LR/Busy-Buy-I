import OrderTable from "../components/OrderTable";
import { useProductContextHook } from "../context/product.context";

const Order = () => {

    const { productData } = useProductContextHook();
    const { orderedItem } = productData;

    console.log(orderedItem, "productDataa....");

    return(
        <>
            <div className="wrapper my-4">
                <h3>Your Orders: </h3>
                <OrderTable data={orderedItem} />
            </div>
        </>
    )
}

export default Order;