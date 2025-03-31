import bohochic from '../assets/images/bohochic.png'
import { Link } from "react-router-dom"

export function Resultat() {
    return (
        <div className="result">
            <h1>{`Quel est votre style de décoration d'intérieur ?`}</h1>
            <div className="fullContent">
                <h2>Boho Chic</h2>
                <div className='answer'>
                    <img src={bohochic}  alt="salon d'inspiration traditionnel japonais"/>
                    <p>{`Le style Boho Chic est un dérivé du style Boho et par conséquent reprend un partie des ses caractéristiques comme la présence d’éléments en osier et en cannages, la superposition de textures et l’éclectisme des objets de décoration. La différence avec le style Boho se trouve dans la palette de couleurs utilisée, composée principalement de couleurs neutres (blancs, beiges, marrons...)`}</p>
                </div>
            </div>
            <Link to={"/profile"} className="addPost">
                <button className='btn'>ENREGISTRER MON RÉSULTAT</button>
            </Link>
            <Link to={"/quizz"} className="addPost">
                <button className='btn'>REFAIRE LE QUIZZ</button>
            </Link>
        </div>
    )
}