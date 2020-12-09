import ImagesGrid from "./ImagesGrid"

const HomeBlock5 = () => {
    return (
        <div className="home-b5">
            <div className="home-b5-inner width-1200">
                <div className="left-column">
                    <h2 className="text-gradient">A safe home for your collection</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam blanditiis porro ratione numquam incidunt quod praesentium voluptates, fuga recusandae natus!</p>
                </div>
                <ImagesGrid column={2}/>
            </div>
        </div>
    )
}

export default HomeBlock5