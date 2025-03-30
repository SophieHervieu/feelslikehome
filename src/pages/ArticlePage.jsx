import { useState } from "react";
import frame from '../assets/images/frame.jpg'
import { IoSearchOutline, IoOptionsSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Filter } from '../components/Filter';

export function ArticlePage() {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
    };

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

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
                        <h1>DISPOSER UN</h1>
                        <h1 className="realign">CADRE SUR UN MUR</h1>
                    </div>
                </div>
                <div className="image">
                    <img src={frame} alt="Photo d'un cadre représentant un voilier accroché sur un mur au dessus du buffet en bois"/>
                    <FaRegHeart className={`favorite ${isFavorite ? 'hidden' : ''}`} 
                        onClick={handleFavoriteClick} />
                    <FaHeart className={`addedFavorite ${isFavorite ? '' : 'hidden'}`} 
                        onClick={handleFavoriteClick} />
                </div>
                <div className="paragraphs">
                    <p>Il semble de prime abord qu’il n’y ait pas de règle spécifique pour accrocher ses cadres. Pour autant, on ne peut pas s’empêcher de remarquer quand un cadre est trop bas, trop haut, ou disposée sur son mur de façon aléatoire, donnant l’impression qu’il est un peu perdu.</p>
                    <p>Dans cet article, vous allez découvrir comment faire en sorte que vos cadres soient accrochés de façon réfléchie, et en accord avec les meubles et autres éléments de décoration de votre intérieur. C’est parti !</p>
                </div>
            </div>
            {isFilterOpen && <div className="overlay" onClick={() => setIsFilterOpen(false)}></div>}
            <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
        </div>
    )
}