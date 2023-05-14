
function Card ({title, image, type, user, userImg, favoriteMovie}){
    return <div className="flex flex-col">
        <div><img src={image} alt={title} /></div>
        <div className="flex flex-col">
            <h3>{title}</h3>
            <h4>{type}</h4>
            <div className="flex">
                <img src={userImg} alt={userImg} />
                <div className="flex felx-col">
                    <div className="flex">
                        <span>{user}</span>
                        <div className=" w-2 h-2 rounded-full bg-main"></div>
                    </div>
                    <div><span>{favoriteMovie}</span></div>
                </div>
            </div>
        </div>
    </div>
}

export default Card;