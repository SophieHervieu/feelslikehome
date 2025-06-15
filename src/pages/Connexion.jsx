import vase from '../assets/images/vase.jpg'
import { Link } from "react-router-dom"

export function Connexion() {
    return (
        <div className="connexion">
            <div className='leftSection'>
                <div className='titleSection'>
                    <div className='lineWrapper'>
                        <span className='line'></span>
                    </div>
                    <div className='titles'>
                        <h1>CONNECTEZ-</h1>
                        <h1 className='realign'>VOUS !</h1>
                    </div>
                </div>
                <form action="" method="post" className="registerForm">
                    <div className="register">
                        <label>Adresse e-mail</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="register">
                        <label>Mot de passe</label>
                        <input type="password" name="password" id="password" required />
                    </div>
                    <Link to="/connexion">
                    <div className="btn">
                        <input type="submit" value="SE CONNECTER" className='button'/>
                    </div>
                    </Link>
                    <div className='account'>
                        <Link to="/oublimdp">
                            <p className='fgtPassword'>Mot de passe oublié ?</p>
                        </Link>
                        <p>{`Vous n'avez pas de compte ? `} <Link to="/Inscription"><span>Inscrivez-vous !</span></Link></p>
                    </div>
                </form>
            </div>
            <img src={vase}/>
        </div>
    )
}