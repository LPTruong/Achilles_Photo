import image from "../../../assets/corgi2.jpg"

const HomeBlock4 = () => {
    return (
        <div className="home-b4">
            <div className="home-b4-inner width-1200">
                <div className="left-column">
                    <h2 className="text-gradient">Share your photos</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia neque nesciunt maxime, temporibus assumenda doloribus aperiam debitis ullam laboriosam ratione?</p>
                </div>
                <img src={image} alt="imageAlt"/>
            </div>
        </div>
    )
}

export default HomeBlock4