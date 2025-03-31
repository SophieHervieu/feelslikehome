import { ProfileHeader } from "../components/ProfileHeader";
import { SinglePost } from "../components/SinglePost";

export function DerniersPosts() {
    return(
        <div className="latestPosts">
            <ProfileHeader />
            <div className="forumPost">
                <div className='titleSection'>
                    <div className='lineWrapper'>
                        <span className='line'></span>
                    </div>
                    <div className='titles'>
                        <h1>MES DERNIERS</h1>
                        <h1 className='realign'>POSTS</h1>
                    </div>
                </div>
                <SinglePost/>
            </div>
        </div>
    )
}