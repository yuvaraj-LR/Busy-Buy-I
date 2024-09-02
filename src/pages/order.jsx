import OrderTable from "../components/OrderTable";
import Empty from "../components/Empty";
import { useProductContextHook } from "../context/product.context";

const Order = () => {
    const { productData } = useProductContextHook();
    const { orderedItem } = productData;

    const orderedDataLength = orderedItem && orderedItem.length > 0 ? true : false;

    return(
        <>
            <div className="wrapper my-4">
                <h3>Your Orders: </h3>

                {orderedDataLength ? <OrderTable data={orderedItem} /> : <Empty text="No orders data available." /> }
            </div>
        </>
    )
}

export default Order;