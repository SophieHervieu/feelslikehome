import vase from '../assets/images/vase.jpg';

export function ReinitMdp() {
    return (
            <div className="fgtnPassword">
                <div className="leftSection">
                    <div className="titleSection">
                        <div className="lineWrapper">
                            <span className="line"></span>
                        </div>
                        <div className="titles">
                            <h1>RÉINITIALISER VOTRE</h1>
                            <h1 className="realign">MOT DE PASSE</h1>
                        </div>
                    </div>
                    <form className="fgtnPasswordForm">
                        <div className="register">
                            <label>Nouveau mot de passe</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="register">
                            <label>Confirmez le mot de passe</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="btn">
                            <input
                                type="submit"
                                value="ENVOYER"
                                className="button"
                            />
                        </div>
                    </form>
                </div>
                <img src={vase} alt="Vase" />
            </div>
    )
}