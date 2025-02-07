import { useState } from "react";
import { IoSearchOutline, IoOptionsSharp } from "react-icons/io5";
import { Article } from '../components/Article';
import { Filter } from '../components/Filter';

export function Articles() {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
    };

    return (
        <div className="articles">
            <div className="navigation">
                <div className={`search-bar ${isSearchActive ? 'active' : ''}`}>
                    <input type="text" />
                </div>
                <IoSearchOutline className="search" onClick={toggleSearch} />
                <IoOptionsSharp className="sort" onClick={() => setIsFilterOpen(true)} />
            </div>
            <div className="articlesList">
                <Article />
            </div>
            {isFilterOpen && <div className="overlay" onClick={() => setIsFilterOpen(false)}></div>}
            <Filter isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
        </div>
    )
}