import frame from '../assets/images/frame.jpg'
import { BsArrowRight } from "react-icons/bs";

export function Article() {
    return (
        <div className="singleArticle">
            <img src={frame} alt="Photo d'un cadre représentant un voilier accroché sur un mur au dessus du buffet en bois"/>
            <h1>DISPOSER UN <br/>CADRE SUR UN MUR</h1>
            <button>
                Découvrir
                <BsArrowRight className="direction"/>
            </button>
        </div>
    )
}