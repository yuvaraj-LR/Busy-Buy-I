import { busyBuyData } from "../data/items.data";
import HomeCard from "./HomeCard";

const HomeList = () => {
    return (
        <>
            {busyBuyData.map((data, index) => (
                <div className="home_cards" key={index}>
                    <HomeCard data={data} />
                </div>
            ))};
        </>
    )
}

export default HomeList;