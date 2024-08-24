import Filter from "../components/Filter";
import HomeList from "../components/HomeList";

const Home = () => {
    return(
        <>
            <div className="my-4 wrapper">
                <div className="flex flex_row flex_space_between home_head">
                    <h4>List of Products: </h4>

                    <Filter />
                </div>
                <div className="flex flex_wrap flex_center flex_gap_1 home_card">
                    <HomeList />
                </div>
            </div>  
        </>
    )
}

export default Home;