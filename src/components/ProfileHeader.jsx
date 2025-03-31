import ProfilePic from '../assets/images/ProfilePic.jpg'
import { SiInstagram } from "react-icons/si";
import { Link } from "react-router-dom"

export function ProfileHeader() {
    return(
        <div className="profileHeader">
            <div className='titleSection'>
                <div className='lineWrapper'>
                    <span className='line'></span>
                </div>
                <div className='titles'>
                    <h1>MON PROFIL</h1>
                </div>
            </div>
            <div className="profileBody">
                <div className="profileDetails">
                    <div className="picture">
                        <img src={ProfilePic} alt="photo de profil de l'utilisateur connecté"/>
                        <p>Importer une nouvelle photo de profil</p>
                    </div>
                    <div className='profileInfo'>
                        <p className='username'>Kathy31000</p>
                        <p className='userInfo'>{`Inscrit(e) depuis le 30/07/2025`}</p>
                    </div>
                </div>
                <div className="profileButtons">
                    <SiInstagram className='instagram'/>
                    <Link to={"/preferences"} className="addPost">
                        <button className='btn'>
                            Préférences
                        </button>
                    </Link>
                </div>
            </div>
            <span className="postLine"></span>
        </div>
    )
}