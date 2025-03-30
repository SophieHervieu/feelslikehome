import bannerFilter from '../assets/images/bannerFilter.png'
import { Link } from "react-router-dom"

export function Home() {
    return (
        <div className='home'>
            <img src={bannerFilter} className='banner'/>
            <div className='text'>
                <p>SUBLIMEZ VOTRE <span className='highlight'>INTÉRIEUR</span></p>
                <p>{`POUR QU'IL VOUS RESSEMBLE`}</p>
            </div>
            <Link to={"/quizz"} className="addPost">
                <button className='btn'>FAIRE LE QUIZZ</button>
            </Link>
        </div>  
    )
}