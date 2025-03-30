import midcentury from '../assets/images/midcentury.png'
import scandi from '../assets/images/scandi.png'
import japandi from '../assets/images/japandi.png'
import bohochic from '../assets/images/bohochic.png'
import transitional from '../assets/images/transitional.jpg'
import industrial from '../assets/images/industrial.png'

export function Quizz() {
    return(
        <div className="quizz">
            
            <h1>{`Quel est votre style de décoration d'intérieur ?`}</h1>
            <div className="fullContent">
                <h2>Laquelle de ces photos vous inspire le plus ?</h2>
                <div className='answers'>
                    <img src={midcentury} alt="salon blanc avec des meubles de style années 70 adaptés à des lignes modernes"/>
                    <img src={scandi}  alt="salon blanc avec des meubles en bois clair de scandinave"/>
                    <img src={japandi}  alt="salon d'inspiration traditionnel japonais"/>
                    <img src={bohochic}  alt="salon d'inspiration traditionnel japonais"/>
                    <img src={transitional}  alt="salon d'inspiration traditionnel japonais"/>
                    <img src={industrial}  alt="salon d'inspiration traditionnel japonais"/>
                </div>
            </div>
            <button className='btn'>QUESTION SUIVANTE</button>
        </div>
    )
}