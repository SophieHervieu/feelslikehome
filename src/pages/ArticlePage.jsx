import { useEffect, useState } from "react";
import frame from '../assets/images/frame.jpg'
import { IoSearchOutline, IoOptionsSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Filter } from '../components/Filter';
import { CommentPost } from "../components/CommentPost";
import { Comment } from "../components/Comment";
import axios from "axios";
import { useParams } from "react-router-dom";

export function ArticlePage() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

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
                <div className="image">
                    <img src={article.image} alt={`Image de l'article : ${article.title}`}/>
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