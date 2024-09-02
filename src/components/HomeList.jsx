import { useProductContextHook } from "../context/product.context";
import { busyBuyData } from "../data/items.data";
import HomeCard from "./HomeCard";

const HomeList = () => {

    const {search} = useProductContextHook();

    return (
        <>
            {busyBuyData.filter(item => {
                return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
            })?.map((data, index) => (
                <div className="home_cards" key={index}>
                    <HomeCard data={data} />
                </div>
            ))};
        </>
    )
}

export default HomeList;