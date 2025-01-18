import vase from '../assets/images/vase.jpg';
import { useState } from 'react';
import { PasswordModal } from '../components/PasswordModal';

export function MdpOublie() {
    const [openModal, setOpenModal] = useState(false);

    const handleSendClick = (e) => {
        e.preventDefault(); // Empêcher le rechargement de la page
        setOpenModal(true);
    };

    return (
        <div>
            <div className="fgtnPassword">
                <div className="leftSection">
                    <div className="titleSection">
                        <div className="lineWrapper">
                            <span className="line"></span>
                        </div>
                        <div className="titles">
                            <h1>MOT DE PASSE</h1>
                            <h1 className="realign">OUBLIÉ ?</h1>
                        </div>
                    </div>
                    <form className="fgtnPasswordForm">
                        <div className="register">
                            <label>Adresse e-mail</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className="btn">
                            <input
                                type="submit"
                                value="ENVOYER"
                                className="button"
                                onClick={handleSendClick}
                            />
                        </div>
                    </form>
                </div>
                <img src={vase} alt="Vase" />
            </div>
            <PasswordModal isOpen={openModal} onClose={() => setOpenModal(false)} />
        </div>
    );
}

