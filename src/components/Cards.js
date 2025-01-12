const Cards = (props) => {
    const {resData} = props;
    const {
        restaurantName,
        restaurantCusine,
        avgRating,
        deliveryTime,
        imageUrl,

    } = resData;
    return (
    <div className="card-container">
        <img alt="rest-card" src={imageUrl}/>
        <div className="res-info">
            <p className="res-name">{restaurantName}</p>
            <p>{restaurantCusine}</p>
            <p className="res-moreinfo">{avgRating}</p>
            <p className="res-moreinfo">{deliveryTime}</p>
        </div>
        

    </div>
);
};

export default Cards;