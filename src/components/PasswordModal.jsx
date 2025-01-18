import PropTypes from 'prop-types';
import { useEffect } from 'react';

export function PasswordModal({ isOpen, onClose }) {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(onClose, 6000); // Fermer après 6 secondes
            return () => clearTimeout(timer); // Nettoyer le timer au démontage
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modalContainer">
            <p>Nous vous avons envoyé un mail afin de réinitialiser votre mot de passe</p>
        </div>
    );
}

PasswordModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};


