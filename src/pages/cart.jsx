import CartTable from "../components/CartTable";

const Cart = () => {

    const data = [
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 9126.85,
            description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category: "men's clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            rating: {
            rate: 3.9,
            count: 120,
            },
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts ",
            price: 1840.9,
            description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category: "men's clothing",
            image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            rating: {
            rate: 4.1,
            count: 259,
            },
        },
    ];

    return(
        <>
            <div className="wrapper my-3">
                <CartTable data={data} />

                <div className="text-end w-100 buy_btn">
                    <button className="btn btn-danger">Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default Cart;