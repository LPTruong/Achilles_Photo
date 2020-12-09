import ImagesGrid from "./ImagesGrid"

const HomeBlock1 = () => {
    return (
        <div className="home-b1">
            <div className="home-b1-inner width-1200">
                <h2 className="left-column">Manage your photo collection with us</h2>
                <ImagesGrid column={3}/>
            </div>
        </div>
    )
}

export default HomeBlock1