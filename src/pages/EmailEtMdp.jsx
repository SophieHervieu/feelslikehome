import { PreferencesLateralMenu } from "../components/PreferencesLateralMenu";
import google from "../assets/images/google.png";

export function EmailEtMdp() {
    return (
        <div className="sectionBody">
            <span className="headerLine"></span>
            <PreferencesLateralMenu />
            <div className="inputBody">
                <div className='titleSection'>
                    <div className='lineWrapper'>
                        <span className='line'></span>
                    </div>
                    <div className='titles'>
                        <h1>EMAIL ET</h1>
                        <h1 className='realign'>MOT DE PASSE</h1>
                    </div>
                </div>
                <div className="emailGeneral">
                    <div className="left">
                        <p className="emailTitle">Adresse e-mail</p>
                        <p className="emailBody">Votre adresse e-mail est <span>catherine_lucas@gmail.com</span></p>
                    </div>
                    <div className="btn">
                        <button>Changer</button>
                    </div>
                </div>
                <div className="mdpGeneral">
                    <div className="left">
                        <p className="emailTitle">Mot de passe</p>
                        <p className="emailBody">*****************************</p>
                    </div>
                    <div className="btn">
                        <button>Changer</button>
                    </div>
                </div>
                <div className="googleGeneral">
                    <div className="left">
                        <img src={google} alt="logo google multicolore"/>
                        <p className="emailTitle">Google</p>
                    </div>
                    <div className="btn">
                        <button>Connecter</button>
                    </div>
                </div>
                <span className="postLine"></span>
                <div className="saveInfoBtns">
                    <button className="cancel">Annuler</button>
                    <button className="save">Enregistrer</button>
                </div>
            </div>
        </div>
    )
}