import FLHLogo from '../assets/images/Feels.png'
import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <div className='nav'>
            <Link to={"/"}>
                <p>ACCUEIL</p>
            </Link>
            <Link to={"/Articles"}>
                <p>ARTICLES</p>
            </Link>
            <Link to={"/Forum"}>
                <p>FORUM</p>
            </Link>
            <Link to={"/"}>
                <img src={FLHLogo} className='logo'/>
            </Link>
            <Link to={"/Apropos"}>
                <p>A PROPOS</p>
            </Link>
            <Link to={"/Contact"}>
                <p>CONTACT</p>
            </Link>
            <Link to={"/Connexion"}>
                <p>CONNEXION</p>
            </Link>
        </div>
    )
}