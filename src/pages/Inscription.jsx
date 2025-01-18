import vase from '../assets/images/vase.jpg'
import { Link } from "react-router-dom"

export function Inscription() {
    return (
        <div className="subscribe">
            <div className='leftSection'>
                <div className='titleSection'>
                    <div className='lineWrapper'>
                        <span className='line'></span>
                    </div>
                    <div className='titles'>
                        <h1>INSCRIVEZ-</h1>
                        <h1 className='realign'>VOUS !</h1>
                    </div>
                </div>
                <form action="" method="post" className="subscribeForm">
                    <div className="register">
                        <label>Adresse e-mail</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="register">
                        <label>Mot de passe</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <div className="register">
                        <label>Confirmez le mot de passe</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <div className="btn">
                        <input type="submit" value="S'INSCRIRE" className='button'/>
                    </div>
                    <div className='account'>
                        <p>{`Vous avez déjà un compte ? `} <Link to="/Connexion"><span>Connectez-vous !</span></Link></p>
                    </div>
                </form>
            </div>
            <img src={vase}/>
        </div>
    )
}