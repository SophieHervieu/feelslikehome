import { ForumHeader } from "../components/ForumHeader";
import { ForumLateralMenu } from "../components/ForumLateralMenu";
import { SinglePost } from "../components/SinglePost";

export function Forum() {
    return (
        <div className="forum">
            <ForumHeader />
            <div className="forumBody">
                <ForumLateralMenu />
                <div className="forumHome">
                    <h1>DERNIERS POSTS</h1>
                    <SinglePost />
                    <span className="postLine"></span>
                </div>
            </div>
        </div>
    )
}