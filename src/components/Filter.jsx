import PropTypes from 'prop-types';
import { IoMdClose } from "react-icons/io";

export function Filter({ isOpen, onClose }) {
    return (
        <div className={`filter ${isOpen ? "open" : "closed"}`}>
            <div className="filterHeader" onClick={onClose}>
                <IoMdClose className='closeBtn'/>
            </div>
            <div className="filterBody">
                <h3>Order des articles</h3>
                <p>Les plus récents</p>
                <p>Les plus anciens</p>
                <h3>Pièces</h3>
                <p>Salon</p>
                <p>Salle à manger</p>
                <p>Cuisine</p>
                <p>Chambre</p>
                <p>Salle de bain</p>
                <p>Toilettes</p>
                <h3>{`Type d'articles`}</h3>
                <p>Conseils décoration</p>
                <p>DIY</p>
                <p>Nouveautés</p>
            </div>
        </div>
    )
}

Filter.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};