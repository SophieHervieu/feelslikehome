import vase from '../assets/images/vase.jpg';

export function Contact() {
    return (
        <div className="contact">
            <div className="leftSection">
                <div className="titleSection">
                    <div className="lineWrapper">
                        <span className="line"></span>
                    </div>
                    <div className="titles">
                        <h1>NOUS</h1>
                        <h1 className="realign">CONTACTER</h1>
                    </div>
                </div>
                <form className="contactForm">
                    <div className="register">
                        <label>Objet</label>
                        <input type="text" name="text" id="text" required />
                    </div>
                    <div className="register">
                        <label>Message</label>
                        <textarea type="text" name="text" id="text" className='message' required></textarea>
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