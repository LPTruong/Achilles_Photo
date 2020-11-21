import image from "../../assets/corgi1.jpg"

const HomeBlock3 = () => {
    return (
        <div className="home-b3">
            <div className="home-b3-inner width-1200">
                <div className="left-column">
                    <h2 className="text-gradient">Search by tag</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, sed!</p>
                </div>
                <img src={image} alt="imageAlt"/>
            </div>
        </div>
    )
}

export default HomeBlock3