import { ProfileHeader } from "../components/ProfileHeader";
import television from "../assets/images/television.jpg";
import windowTrim from "../assets/images/windowTrim.jpg";
import table from "../assets/images/table.jpg";
import frame from "../assets/images/frame.jpg";
import galleryWall from "../assets/images/galleryWall.jpg";

export function ArticlesFavoris() {
    return(
        <div className="favArticles">
            <ProfileHeader />
            <div className="favorites">
                <div className="forumPost">
                    <div className='titleSection'>
                        <div className='lineWrapper'>
                            <span className='line'></span>
                        </div>
                        <div className='titles'>
                            <h1>MES ARTICLES</h1>
                            <h1 className='realign'>FAVORIS</h1>
                        </div>
                    </div>
                    
                </div>
                <div className="favoritesList">
                    <div className="oneFavorite">
                        <img src={television}/>
                        <h3>ENCADRER SA TÉLÉVISION</h3>
                    </div>
                    <div className="oneFavorite">
                        <img src={galleryWall}/>
                        <h3>CRÉER UN MUR DE CADRES</h3>
                    </div>
                    <div className="oneFavorite">
                        <img src={windowTrim}/>
                        <h3>EMBELLIR SES FENÊTRES</h3>
                    </div>
                    <div className="oneFavorite">
                        <img src={table}/>
                        <h3>ARTS DE LA TABLE</h3>
                    </div>
                    <div className="oneFavorite">
                        <img src={frame}/>
                        <h3>DISPOSER UN CADRE SUR UN MUR</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}