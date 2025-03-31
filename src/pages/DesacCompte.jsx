import { PreferencesLateralMenu } from "../components/PreferencesLateralMenu";

export function DesacCompte() {
    return (
        <div className="desac">
            <span className="headerLine"></span>
            <PreferencesLateralMenu />
            <div className="desacBody">
                <div className='titleSection'>
                    <div className='lineWrapper'>
                        <span className='line'></span>
                    </div>
                    <div className='titles'>
                        <h1>DÉSACTIVER</h1>
                        <h1 className='realign'>MON COMPTE</h1>
                    </div>
                </div>
                <div className="deactivate">
                    <p className="description">Si vous désactivez votre compte, vous aurez toujours la possibilité de le réactiver plus tard à votre convenance. Vos informations restent enregistrées tant que vous ne les supprimez pas vous-même ou que vous ne demandez pas leur suppression via le formulaire de contact. Si vous souhaitez la suppression complète de votre compte, veuillez faire une demande via ce formulaire.</p>
                    <p className="instruction">Entrez votre mot de passe afin de confirmer que vous avez pris connaissance des informations ci -dessus</p>
                    <input type="password" id="password" name="password" required/>
                </div>
                <span className="postLine"></span>
                <div className="saveInfoBtns">
                    <button className="cancel">Annuler</button>
                    <button className="save">Désactiver</button>
                </div>
            </div>
        </div>
    )
}