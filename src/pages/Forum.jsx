import { ForumHeader } from "../components/ForumHeader";
import { ForumLateralMenu } from "../components/ForumLateralMenu";
import ProfilePic from "../assets/images/ProfilePic.jpg";
import { FaRegComments } from "react-icons/fa";
import { PiArrowFatUpBold } from "react-icons/pi";

export function Forum() {
    return (
        <div className="forum">
            <ForumHeader />
            <div className="forumBody">
                <ForumLateralMenu />
                <div className="forumHome">
                    <h1>DERNIERS POSTS</h1>
                    <p className="postTitle">Parquet en PVC dans une salle de bain ?</p>
                    <div className="profile">
                        <img src={ProfilePic}/>
                        <p className="pseudo">Kathy31000</p>
                    </div>
                    <p className="post">{`Que pensez-vous de l’idée d’installer un parquet en PVC dans sa salle de bien ? Est-ce que ça vieillit bien ?`}</p>
                    <p className="post">{`Je n’aime pas trop le carrelage, alors je me pose la question de cette alternative qui m’a été présentée par un vendeur Leroy Merlin comme un bon compromis si je veux un effet parquet sur le sol de ma salle de bain de style scandinave.`}</p>
                    <p className="post">{`Merci pour vos retours !`}</p>
                    <div className="reactions">
                        <FaRegComments />
                        <p className="nb">3</p>
                        <PiArrowFatUpBold />
                        <p className="nb">10</p>
                    </div>
                    <span className="postLine"></span>
                </div>
            </div>
        </div>
    )
}