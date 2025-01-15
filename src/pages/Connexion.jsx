import vase from '../assets/images/vase.jpg'

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
                    <div className="btn">
                        <input type="submit" value="Connexion" className='button'/>
                    </div>
                    <div className='account'>
                        <p className='fgtPassword'>Mot de passe oublié ?</p>
                        <p>{`Vous n'avez pas de compte ? `} <span>Inscrivez-vous !</span></p>
                    </div>
                </form>
            </div>
            <img src={vase}/>
        </div>
    )
}