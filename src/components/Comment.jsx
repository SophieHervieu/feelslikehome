import ProfilePic from "../assets/images/ProfilePic.jpg";
import { FaRegComments } from "react-icons/fa";
import { PiArrowFatUpBold } from "react-icons/pi";

export function Comment() {
    return(
        <div className="singleComment">
            <div className="profile">
                <img src={ProfilePic}/>
                <p className="pseudo">BricoJack</p>
            </div>
            <p className="post">{`L’avantage du PVC, c’est que ça ne moisit pas, contrairement au parquet stratifié, au flottant (surtout pas dans une salle de bain, celui-là !) ou au vrai parquet bois.`}</p>
            <p className="post">{`Pour ce qui est de la qualité, je pense que ça vieillit moins bien que du carrelage effet bois dans le temps, vu que les dalles vont bouger, même en faisant attention. `}</p>
            <div className="reactions">
                <FaRegComments />
                <p className="nb">3</p>
                <PiArrowFatUpBold />
                <p className="nb">10</p>
            </div>
            <div className="btn">
                <input
                    type="button"
                    value="Éditer"
                    className="button"
                />
                <input
                    type="button"
                    value="Supprimer"
                    className="button"
                />
            </div>
        </div>
    )
}