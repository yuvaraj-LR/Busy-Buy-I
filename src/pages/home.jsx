import Filter from "../components/Filter";
import HomeList from "../components/HomeList";
import { useProductContextHook } from "../context/product.context";
import { ClipLoader, MoonLoader } from 'react-spinners';

const Home = () => {
    const { loading } = useProductContextHook();
    console.log(loading, "loadgingg..");

    return(
        <>
            {
            loading ? <div className="flex flex_center loader"> <MoonLoader size={60} color={"#3498db"} /> </div> :
            <div className="my-4 wrapper">
                <div className="flex flex_row flex_center flex_space_between home_head">
                    <h4>List of Products: </h4>

                    <Filter />
                </div>
                <div className="flex flex_wrap flex_center flex_gap_1 home_card">
                    <HomeList />
                </div>
            </div> 
            }
        </>
    )
}

export default Home;