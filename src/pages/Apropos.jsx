import moodyLiving from '../assets/images/moodyLiving.png';
import warmLiving from '../assets/images/warmLiving.png';

export function Apropos() {
    return (
        <div className="apropos">
            <div className="section">
                <div className='image'>
                    <img src={moodyLiving} alt="salon vu de front avec des couleurs sombres et élégantes, des moulures aux murs, une table basse, un canapé, des fauteuils, un buffet et des suspensions pour les luminaires"/>
                </div>
                <div className='paragraph'>
                    <div className='titleSection'>
                        <div className='lineWrapper'>
                            <span className='line'></span>
                        </div>
                        <div className='title'>
                            <h1>A PROPOS</h1>
                        </div>
                        <div className='lineWrapper'>
                            <span className='line'></span>
                        </div>
                    </div>
                    <div className='text'>
                        <p>{`Ce site a vu le jour grâce à une passion pour la décoration et le design d’intérieur.`}</p>
                        <p>{`Le désir de rendre accessibles les conseils et DIY fondamentaux pour une déco réussie et personnalisée est au coeur de ce projet.
                        Plus besoin de vidéos YouTube qu’il faudrait revisionner plusieurs fois afin d’avoir les réponses à ses questions, tout est ici !`}</p>
                        <p>{`Un quizz vous permettra de découvrir votre style afin de vous aider à transformer votre intérieur comme vous le souhaitez.`}</p>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className='image'>
                    <img src={warmLiving} alt="salon vu de haut de style scandinave avec des tons bois clair et crème, une table basse, un canapé, des fauteuils et une cheminée avec des bougies"/>
                </div>
                <div className='paragraph'>
                    <div className='titleSection'>
                        <div className='lineWrapper'>
                            <span className='line'></span>
                        </div>
                        <div className='title'>
                            <h1>ENGAGEMENTS</h1>
                        </div>
                        <div className='lineWrapper'>
                            <span className='line'></span>
                        </div>
                    </div>
                    <div className='text'>
                        <p>{`ce site vise à aider quiconque souhaite se lancer dans un projet de décoration ou de rénovation à trouver l’inspiration et les informations nécessaires.`}</p>
                        <p>{`Des articles contenant des liens vers des produits liés à des thématiques spécifiques, au quizz personnalisé pour cibler son style de prédilection, tout est fait permettre à tout le monde, même aux néophytes, d’embellir son intérieur pour s’y sentir mieux !`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}