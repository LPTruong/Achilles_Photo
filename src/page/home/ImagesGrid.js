import corgi1 from "../../assets/corgi1.jpg"
import corgi2 from "../../assets/corgi2.jpg"
import corgi3 from "../../assets/corgi3.jpg"
import corgi4 from "../../assets/corgi4.jpg"
import corgi5 from "../../assets/corgi5.jpg"
import corgi6 from "../../assets/corgi6.jpg"

const ImagesGrid = (props) => {
    if (props.column === 2) return (
        <div className="images-grid-2">
            <div className="column">
                <img src={corgi1} alt="corgi1"/>
                <img src={corgi2} alt="corgi2"/>
            </div>
            <div className="column">
                <img src={corgi3} alt="corgi3"/>
                <img src={corgi4} alt="corgi4"/>
            </div>
        </div>
    )
    else if (props.column === 4) return (
        <div className="images-grid-4">
            <div className="column">
                <img src={corgi1} alt="corgi1"/>
                <img src={corgi2} alt="corgi2"/>
            </div>
            <div className="column">
                <img src={corgi3} alt="corgi3"/>
                <img src={corgi4} alt="corgi4"/>
            </div>
            <div className="column">
                <img src={corgi5} alt="corgi5"/>
                <img src={corgi6} alt="corgi6"/>
            </div>
            <div className="column">
                <img src={corgi1} alt="corgi1"/>
                <img src={corgi2} alt="corgi2"/>
            </div>
        </div>
    )
    return (
        <div className="images-grid-3">
            <div className="column">
                <img src={corgi1} alt="corgi1"/>
                <img src={corgi2} alt="corgi2"/>
            </div>
            <div className="column">
                <img src={corgi3} alt="corgi3"/>
                <img src={corgi4} alt="corgi4"/>
            </div>
            <div className="column">
                <img src={corgi5} alt="corgi5"/>
                <img src={corgi6} alt="corgi6"/>
            </div>
        </div>
    )
}

export default ImagesGrid