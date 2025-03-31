import { PreferencesLateralMenu } from "../components/PreferencesLateralMenu";
import { IoToggle } from "react-icons/io5";

export function Notifications() {
    return (
        <div className="notifs">
            <span className="headerLine"></span>
            <PreferencesLateralMenu />
            <div className="notifBody">
                <div className='titleSection'>
                    <div className='lineWrapper'>
                        <span className='line'></span>
                    </div>
                    <div className='titles'>
                        <h1>GESTION DES</h1>
                        <h1 className='realign'>NOTIFICATIONS</h1>
                    </div>
                </div>
                <div className="section">
                    <div className="blog">
                        <p>Recevoir des notifications ou des e-mails lors des événements ci-dessous</p>
                        <h1>Blog</h1>
                        <p>Recevoir un e-mail lorsqu’un nouvel article sort</p>
                        <p>Recevoir un e-mail lorsque quelqu’un répond à un de mes commentaires</p>
                    </div>
                    <div className="toggleBtn">
                        <IoToggle className="toggle"/>
                        <IoToggle className="toggle"/>
                        <IoToggle className="toggle"/>
                    </div>
                </div>
                <span className="postLine"></span>
                <div className="section">
                    <div className="blog">
                        <h1 className="forumTitle">Forum</h1>
                        <p>Recevoir un e-mail lorsque quelqu’un répond à un de mes posts</p>
                        <p>Recevoir un e-mail lorsque quelqu’un répond à un de mes commentaires</p>
                    </div>
                    <div className="toggleBtn">
                        <IoToggle className="toggle"/>
                        <IoToggle className="toggle"/>
                        <IoToggle className="toggle"/>
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