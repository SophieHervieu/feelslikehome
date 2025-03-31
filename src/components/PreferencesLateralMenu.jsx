import { Link } from "react-router-dom"

export function PreferencesLateralMenu() {
    return(
        <div className="preferencesLateral">
            <Link to={"/preferences"} className="addPost">
            <div className="section">
                PRÉFÉRENCES
            </div>
            </Link>
            <Link to={"/notifications"} className="addPost">
            <div className="section">
                NOTIFICATIONS
            </div>
            </Link>
            <Link to={"/emailetmdp"} className="addPost">
            <div className="section">
                EMAIL ET MOT DE PASSE
            </div>
            </Link>
            <Link to={"/desactivation"} className="addPost">
            <div className="section">
                DÉSACTIVER MON COMPTE
            </div>
            </Link>
        </div>
    )
}