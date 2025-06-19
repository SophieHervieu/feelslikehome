import vase from '../assets/images/vase.jpg';

export function NewArticle () {
    return (
        <div className="newArticle">
            <div className="leftSection">
                <div className="titleSection">
                    <div className="lineWrapper">
                        <span className="line"></span>
                    </div>
                    <div className="titles">
                        <h1>CRÉER</h1>
                        <h1 className="realign">UN ARTICLE</h1>
                    </div>
                </div>
                <form className="contactForm">
                    <div className="register">
                        <label>Titre de l'article</label>
                        <input type="text" name="text" id="text" required />
                    </div>
                    <div className="register">
                        <label>Corps du texte</label>
                        <textarea type="text" name="text" id="text" className='message' required></textarea>
                    </div>
                    <div className="addImage">
                        <p>+ Ajouter des images</p>
                    </div>
                    <div className="btn">
                        <input
                            type="submit"
                            value="ENREGISTRER"
                            className="button"
                        />
                    </div>
                </form>
            </div>
            <img src={vase} alt="Vase" />
        </div>
    )
}