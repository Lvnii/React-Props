import Button from "../button/button";
import './style.css'

const Card = (props) => {
    const { title, description, img, remove} = props

    return (
        <div className="list">
            <ul>
                <li>
                    <div className="card">
                        <div className="image-container">
                            <img src={img} alt="card" />
                        </div>
                        <div className="description">
                            <h2 className="title">
                                {title}
                            </h2>
                            <div className="desc-txt">
                                {description}
                            </div>
                            <div className="actions">
                                <Button 
                                    status="danger"
                                    text="Remove from wishlist" 
                                    click={() => {remove()}}
                                />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Card;