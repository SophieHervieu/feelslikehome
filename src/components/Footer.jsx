import { Link } from "react-router"

export function Footer() {
    return (
        <div className="footer">
            <Link to='/CGU'><p>{`Mentions légales et Conditions Générales d'Utilisation`}</p></Link>
            <p>©Feels Like Home</p>
        </div>
    )
}