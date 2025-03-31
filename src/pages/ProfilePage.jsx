import { ProfileHeader } from "../components/ProfileHeader";
import bohochic from "../assets/images/bohochic.png";
import latestPosts from "../assets/images/latestPosts.png";
import favArticles from "../assets/images/favArticles.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom"

export function ProfilePage() {
    return(
        <div className="profilePage">
            <ProfileHeader />
            <div className="profileMenu">
                <div className="section">
                    <Link to={"/resultat"} className="addPost">
                        <img src={bohochic}/>
                    </Link>
                    <Link to={"/resultat"} className="addPost">
                        <button>
                            Mon résultat au quizz
                            <BsArrowRight className="direction"/>
                        </button>
                    </Link>
                </div>
                <div className="section">
                    <Link to={"/derniersposts"} className="addPost">
                        <img src={latestPosts}/>
                    </Link>
                    <Link to={"/derniersposts"} className="addPost">
                        <button>
                            Mes derniers posts
                            <BsArrowRight className="direction"/>
                        </button>
                    </Link>
                </div>
                <div className="section">
                    <Link to={"/favoris"} className="addPost">
                        <img src={favArticles}/>
                    </Link>
                    <Link to={"/favoris"} className="addPost">
                        <button>
                            Mes articles favoris
                            <BsArrowRight className="direction"/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}