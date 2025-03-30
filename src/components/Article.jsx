import { useState } from "react";
import frame from '../assets/images/frame.jpg'
import { BsArrowRight } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom"

export function Article() {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };
    
    return (
        <div className="singleArticle">
            <img src={frame} alt="Photo d'un cadre représentant un voilier accroché sur un mur au dessus du buffet en bois"/>
            <FaRegHeart className={`favorite ${isFavorite ? 'hidden' : ''}`} 
                onClick={handleFavoriteClick} />
            <FaHeart className={`addedFavorite ${isFavorite ? '' : 'hidden'}`} 
                onClick={handleFavoriteClick} />
            <h1>DISPOSER UN <br/>CADRE SUR UN MUR</h1>
            <Link to={"/article"} className="addPost">
                <button>
                    Découvrir
                    <BsArrowRight className="direction"/>
                </button>
            </Link>
        </div>
    )
}