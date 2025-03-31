import { ForumHeader } from "../components/ForumHeader";
import { ForumLateralMenu } from "../components/ForumLateralMenu";
import { RxArrowLeft } from "react-icons/rx";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

export function NewForumPost() {
    return (
        <div className="newPost">
            <ForumHeader />
            <div className="newPostBody">
                <ForumLateralMenu />
                <div className="formBody">
                    <div className="navigate">
                    <Link to={"/forum"} className="singlePost">
                        <RxArrowLeft className="previous"/>
                    </Link>
                        <h1>{`RETOUR À L'ACCUEIL`}</h1>
                    </div>
                    <p className="postTitle">Créer un nouveau post</p>
                    <div className="postForm">
                        <form className="newPostForm">
                            <div className="register">
                                <label>Titre du post</label>
                                <input type="text" name="text" id="title" required />
                            </div>
                            <div className="register">
                                <label>Détail du post</label>
                                <textarea type="text" name="text" id="text" className='message' required></textarea>
                            </div>
                            <div className="addImage">
                                <p>+ Ajouter des images</p>
                            </div>
                            <div className="custom-select">
                                <label>Sélectionner une catégorie</label>
                                <select name="room" id="room-select">
                                    <option value=""></option>
                                    <option value="living">Salon</option>
                                    <option value="dining">Salle à manger</option>
                                    <option value="kitchen">Cuisine</option>
                                    <option value="bedroom">Chambre</option>
                                    <option value="bathroom">Salle de bain</option>
                                    <option value="toilet">Toilettes</option>
                                    <option value="outdoors">Extérieur</option>
                                </select>
                                <FiChevronUp className="select-icon-up" />
                                <FiChevronDown className="select-icon-down" />
                            </div>
                            <div className="btn">
                                <input
                                    type="button"
                                    value="Annuler"
                                    className="cancelButton"
                                />
                                <input
                                    type="submit"
                                    value="Créer"
                                    className="button"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}