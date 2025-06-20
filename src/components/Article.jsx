import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom"

export function Article({ article }) {

    const [firstPart, secondPart] = article.title.split('||');
    
    return (
        <div className="singleArticle">
            <Link to={`/article/${article.id_article}`} className="addPost">
                <img src={`http://localhost:3000/uploads/${article.image}`} alt={`Image de l'article : ${article.title}`}/>
            </Link>
            <h1>{firstPart} <br/>{secondPart}</h1>
            <Link to={`/article/${article.id_article}`} className="addPost">
                <button>
                    Découvrir
                    <BsArrowRight className="direction"/>
                </button>
            </Link>
        </div>
    )
}