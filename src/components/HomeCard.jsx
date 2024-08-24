const HomeCard = (data) => {
    const {title, price, description, image, rating} = data.data;

    return(
        <>
            <div className="card" >
                <img src={image} className="card-img-top card_img" alt={title} width="10" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="flex flex_space_between card-title-div">
                        <h2>&#x20b9;{price}</h2>   
                        <div className="flex flex_center card-rating">
                            <span><i className="fa-solid fa-star"></i></span>
                            <span className="">{rating.rate}</span>
                        </div>
                    </div>
                    <button className="w-100 btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default HomeCard;