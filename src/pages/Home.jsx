import banner from '../assets/images/banner.png'

export function Home() {
    return (
        <div className='home'>
            <img src={banner} className='banner'/>
            <div className='text'>
                <p>SUBLIMEZ VOTRE <span className='highlight'>INTÉRIEUR</span></p>
                <p>{`POUR QU'IL VOUS RESSEMBLE`}</p>
            </div>
            <button className='btn'>FAIRE LE QUIZZ</button>
        </div>  
    )
}