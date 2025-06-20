import { useEffect, useState } from "react";
import { IoSearchOutline, IoOptionsSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Filter } from '../components/Filter';
import { CommentPost } from "../components/CommentPost";
import { Comment } from "../components/Comment";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

export function ArticlePage() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios
          .get(`http://localhost:3000/api/article/${id}`)
          .then((res) => {
            setArticle(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.error(err);
            setError("Impossible de charger l'article.");
            setLoading(false);
          });
    }, [id]);

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
    };

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    const onDelete = (id) => {
        if (window.confirm("Voulez-vous vraiment supprimer cet article ?")) {
            axios
              .delete(`http://localhost:3000/api/article/${id}`)
              .then(() => {
                navigate("/Articles");
              })
              .catch((error) => {
                console.error("Erreur lors de la suppression :", error);
                alert("Impossible de supprimer l'article.");
              });
        }
    };

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>{error}</p>;
    if (!article) return <div>Chargement...</div>;

    const [firstPart, secondPart] = article.title.split('||');

    return(
        <div className='articlePage'>
            <div className="navigation">
                <div className={`search-bar ${isSearchActive ? 'active' : ''}`}>
                    <input type="text" />
                </div>
                <IoSearchOutline className="search" onClick={toggleSearch} />
                <IoOptionsSharp className="sort" onClick={() => setIsFilterOpen(true)} />
            </div>
            <div className="articleBody">
                <div className="titleSection">
                    <div className="lineWrapper">
                        <span className="line"></span>
                    </div>
                    <div className="titles">
                        <h1>{firstPart}</h1>
                        <h1 className="realign">{secondPart}</h1>
                    </div>
                </div>
                <div className="editionBtns">
                    <Link to={`/article/edit/${article.id_article}`}>
                        <button>Modifier l'article</button>
                    </Link>
                    <button onClick={() => onDelete(article.id_article)}>Supprimer l'article</button>
                </div>
                <div className="image">
                    <img src={`http://localhost:3000/uploads/${article.image}`} alt={`Image de l'article : ${article.title}`}/>
                    <FaRegHeart className={`favorite ${isFavorite ? 'hidden' : ''}`} 
                        onClick={handleFavoriteClick} />
                    <FaHeart className={`addedFavorite ${isFavorite ? '' : 'hidden'}`} 
                        onClick={handleFavoriteClick} />
                </div>
                <div className="paragraphs">
                    <p>{article.content}</p>
                </div>
                <span className="postLine"></span>
                <CommentPost />
                <span className="postLine"></span>
                <div className="commentSection">
                    <Comment />
                </div>
            </div>
            {isFilterOpen && <div className="overlay" onClick={() => setIsFilterOpen(false)}></div>}
            <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
        </div>
    )
}