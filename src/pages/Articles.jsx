import { useEffect, useState } from "react";
import { IoSearchOutline, IoOptionsSharp } from "react-icons/io5";
import { Article } from '../components/Article';
import { Filter } from '../components/Filter';
import { Link } from "react-router-dom";
import axios from "axios";

export function Articles() {
    const [articles, setArticles] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            axios
              .get(`http://localhost:3000/api/article`, {
                params: {
                  title: searchTerm,
                },
              })
              .then((response) => {
                setArticles(response.data);
              })
              .catch((error) => {
                console.error(error);
              });
        }, 300);
    
        return () => clearTimeout(delayDebounce);
    }, [searchTerm]);

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
        setTimeout(() => {
            document.getElementById("searchInput")?.focus();
        }, 100);
    };

    return (
        <div className="articles">
            <div className="navigation">
                <div className="addArticle">
                    <Link to={"/nouvelarticle"} className="addPost">
                        <button>
                            + Créer un article
                        </button>
                    </Link>
                </div>
                <div className="navIcons">
                    <div className={`search-bar ${isSearchActive ? 'active' : ''}`}>
                        <input 
                        type="text" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <IoSearchOutline className="search" onClick={toggleSearch} />
                    <IoOptionsSharp className="sort" onClick={() => setIsFilterOpen(true)} />
                </div>
            </div>
            <div className="articlesList">
            {articles.length === 0 ? (
                <p className="no-results">Aucun article ne correspond à votre recherche.</p>
            ) : (
                articles.map((article) => (
                <Article key={article.id} article={article} />
                ))
            )}
            </div>
            {isFilterOpen && <div className="overlay" onClick={() => setIsFilterOpen(false)}></div>}
            <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
        </div>
    )
}