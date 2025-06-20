import vase from '../assets/images/vase.jpg';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";

export function NewArticle () {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { id } = useParams();
    const isEditMode = Boolean(id);
    const navigate = useNavigate();
    const [imageFile, setImageFile] = useState(null);
    const [existingImageName, setExistingImageName] = useState(null);

    useEffect(() => {
        if (id) {
          axios
            .get(`http://localhost:3000/api/article/${id}`)
            .then((res) => {
              setTitle(res.data.title);
              setContent(res.data.content);
              setExistingImageName(res.data.image);
            })
            .catch((err) => console.error("Erreur chargement article :", err));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('id_users', 1);
        if (imageFile) {
            formData.append('image', imageFile);
        }
        if (!imageFile && existingImageName) {
            formData.append('existingImage', existingImageName);
        }

        const request = id
            ? axios.put(`http://localhost:3000/api/article/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            : axios.post('http://localhost:3000/api/article', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

        request
            .then(() => navigate('/Articles'))
            .catch((err) => console.error("Erreur d'envoi :", err));
    };

    return (
        <div className="newArticle">
            <div className="leftSection">
                <div className="titleSection">
                    <div className="lineWrapper">
                        <span className="line"></span>
                    </div>
                    <div className="titles">
                        <h1>{isEditMode ? "MODIFIER" : "CRÉER"}</h1>
                        <h1 className="realign">UN ARTICLE</h1>
                    </div>
                </div>
                <form className="contactForm" onSubmit={handleSubmit}>
                    <div className="register">
                        <label>Titre de l'article</label>
                        <input 
                            type="text" 
                            name="title" 
                            id="text" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required />
                    </div>
                    <div className="register">
                        <label>Corps du texte</label>
                        <textarea 
                            type="text" 
                            name="content" 
                            id="text" 
                            className='message'
                            value={content}
                            onChange={(e) => setContent(e.target.value)} 
                            required></textarea>
                    </div>
                    <div className="addImage">
                        <label>Image de l'article</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImageFile(e.target.files[0])}
                        />
                    </div>
                    <div className="btn">
                        <input
                            type="submit"
                            value={isEditMode ? "MODIFIER" : "ENREGISTRER"}
                            className="button"
                        />
                    </div>
                </form>
            </div>
            <img src={vase} alt="Vase" />
        </div>
    )
}