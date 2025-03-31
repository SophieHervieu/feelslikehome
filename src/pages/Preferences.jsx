import { PreferencesLateralMenu } from "../components/PreferencesLateralMenu";
import ProfilePic from "../assets/images/ProfilePic.jpg";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export function Preferences() {
    return(
        <div className="preferences">
            <span className="headerLine"></span>
            <PreferencesLateralMenu />
            <div className="preferenceBody">
                <div className='titleSection'>
                    <div className='lineWrapper'>
                        <span className='line'></span>
                    </div>
                    <div className='titles'>
                        <h1>INFORMATIONS</h1>
                        <h1 className='realign'>PERSONNELLES</h1>
                    </div>
                </div>
                <div className="userInfo">
                    <div className="userInputs">
                        <div className="nameInputs">
                            <div className="lastname">
                                <label>Nom</label>
                                <input type="text" name="text" id="text" required />
                            </div>
                            <div className="firstname">
                                <label>Prénom</label>
                                <input type="text" name="text" id="text" required />
                            </div>
                        </div>
                        <div className="otherInputs">
                            <label>Pseudonyme *</label>
                            <input type="text" name="text" id="text" required />
                            <label>Localité</label>
                            <input type="text" name="text" id="text"/>
                            <label>À propos de vous</label>
                            <textarea type="text" name="text" id="text" className='message'></textarea>
                            <p>160 caractères maximum</p>
                        </div>
                    </div>
                    <div className="pictureSection">
                        <img src={ProfilePic}/>
                        <p className="import">Importer une nouvelle photo de profil</p>
                        <p className="delete">Supprimer ma photo de profil</p>
                    </div>
                </div>
                <span className="postLine"></span>
                <div className="socialMedia">
                    <div className='titleSection'>
                        <div className='lineWrapper'>
                            <span className='line'></span>
                        </div>
                        <div className='titles'>
                            <h1>RÉSEAUX</h1>
                            <h1 className='realign'>SOCIAUX</h1>
                        </div>
                    </div>
                    <h2>Connectez vos réseaux sociaux et affichez-les sur votre profil</h2>
                    <div className="discord">
                        <FaDiscord className="discordIcon"/>
                        <button>Connecter</button>
                    </div>
                    <div className="others">
                        <FaYoutube className="otherIcon"/>
                        <input type="text" name="text" id="text" />
                    </div>
                    <div className="others">
                        <FaTiktok className="otherIcon"/>
                        <input type="text" name="text" id="text" />
                    </div>
                    <div className="others">
                        <RiInstagramFill className="otherIcon"/>
                        <input type="text" name="text" id="text" />
                    </div>
                </div>
                <span className="postLine"></span>
                <div className="visibility">
                    <div className='titleSection'>
                        <div className='lineWrapper'>
                            <span className='line'></span>
                        </div>
                        <div className='titles'>
                            <h1>VISIBILITÉ</h1>
                        </div>
                    </div>
                    <div className="radioChoice">
                        <input type="radio" id="everyone" name="beVisible" value="Tout le monde" />
                        <label>Tout le monde</label>
                        <p>Tout le monde peut voir votre profil</p>
                    </div>
                    <div className="radioChoice">
                        <input type="radio" id="selfonly" name="beVisible" value="selfonly" />
                        <label>Seulement moi</label>
                        <p>Seuls votre pseudonyme et votre photo de profil sont visibles</p>
                    </div>
                </div>
                <div className="saveInfoBtns">
                    <button className="cancel">Annuler</button>
                    <button className="save">Enregistrer</button>
                </div>
            </div>
        </div>
    )
}