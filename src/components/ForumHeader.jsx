import { useState } from "react";
import { Link } from "react-router-dom"
import { IoSearchOutline } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";

export function ForumHeader() {
    const [isSearchActive, setIsSearchActive] = useState(false);

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
    };

    return (
        <div className="forumHeader">
            <div className="heading">
                <h1>FORUM</h1>
                <div className="rightSection">
                    <div className={`search-bar ${isSearchActive ? 'active' : ''}`}>
                        <input type="text" />
                    </div>
                    <IoSearchOutline className="search" onClick={toggleSearch} />
                    <Link to={"/NewPost"} className="addPost">
                        <MdAddBox className="add"/>
                    </Link>
                </div>
            </div>
            <span className="headerLine"></span>
        </div>
    )
}