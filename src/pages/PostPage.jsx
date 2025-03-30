import { ForumHeader } from "../components/ForumHeader";
import { ForumLateralMenu } from "../components/ForumLateralMenu";
import { SinglePost } from "../components/SinglePost";
import { CommentPost } from "../components/CommentPost";
import { Comment } from "../components/Comment";
import { RxArrowLeft } from "react-icons/rx";
import { Link } from "react-router-dom";

export function PostPage() {
    return (
        <div className="postPage">
            <ForumHeader />
            <div className="forumBody">
                <ForumLateralMenu />
                <div className="forumHome">
                    <div className="navigate">
                        <Link to={"/forum"} className="singlePost">
                            <RxArrowLeft className="previous"/>
                        </Link>
                        <h1>{`RETOUR À L'ACCUEIL`}</h1>
                        
                    </div>
                    <SinglePost />
                    <span className="postLine"></span>
                    <CommentPost />
                    <span className="postLine"></span>
                    <Comment className="singleComment"/>
                </div>
            </div>
        </div>
    )
}