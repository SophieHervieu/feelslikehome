import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdAddBox } from "react-icons/md";
import { ForumLateralMenu } from "../components/ForumLateralMenu";

export function Forum() {
    const [isSearchActive, setIsSearchActive] = useState(false);

    const toggleSearch = () => {
        setIsSearchActive(!isSearchActive);
    };

    return (
        <div className="forum">
            <div className="forumHeader">
                <div className="heading">
                    <h1>FORUM</h1>
                    <div className="rightSection">
                        <div className={`search-bar ${isSearchActive ? 'active' : ''}`}>
                            <input type="text" />
                        </div>
                        <IoSearchOutline className="search" onClick={toggleSearch} />
                        <MdAddBox className="add"/>
                    </div>
                </div>
                <span className="headerLine"></span>
            </div>
            <div className="forumBody">
                <ForumLateralMenu />
            </div>
        </div>
    )
}