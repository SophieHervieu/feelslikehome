import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

export function Resultat() {
    const location = useLocation();
    const { answers } = location.state || {};
    const navigate = useNavigate();
    const [resultat, setResultat] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!answers) {
            // Pas de réponses => redirection vers /quizz
            navigate("/quizz");
            return;
        }

        // Exemple d'API qui renvoie la liste des quizz_result (avec id et description)
        axios.get("http://localhost:3000/api/quizz/results")
        .then((res) => {
            const results = res.data; // tableau de { id_quizz_result, title, description, image_url }

            // On compte combien de fois chaque id_quizz_result apparait dans les réponses
            const counts = {};
            for (const answerId of Object.values(answers)) {
            // Trouver dans results le quizz_result lié à cette réponse (il faut que l'API donne cette info)
            // Supposons qu'il y a une relation dans ton API pour savoir quel id_quizz_result correspond à answerId
            // Ici, on simule avec une fonction find
            const resultForAnswer = results.find(r => r.answer_ids.includes(answerId)); // adapter selon ta data réelle
            if (resultForAnswer) {
                counts[resultForAnswer.id_quizz_result] = (counts[resultForAnswer.id_quizz_result] || 0) + 1;
            }
            }

            // Trouver l'id_quizz_result avec le max de votes
            let maxId = null;
            let maxCount = 0;
            for (const [key, val] of Object.entries(counts)) {
            if (val > maxCount) {
                maxCount = val;
                maxId = key;
            }
            }

            const finalResult = results.find(r => r.id_quizz_result === parseInt(maxId));
            setResultat(finalResult || null);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }, [answers, navigate]);

    if (loading) return <p>Chargement du résultat...</p>;
    if (!answers) return <p>Aucune réponse reçue</p>;
    if (!resultat) return <p>Résultat introuvable</p>;

    return (
        <div className="result">
            <div className="fullContent">
                <h2>{resultat.title}</h2>
                <div className='answer'>
                    <img src={resultat.image_url}  alt={resultat.result_title}/>
                    <p>{resultat.result_text}</p>
                </div>
            </div>
            <Link to={"/profile"} className="addPost">
                <button className='btn'>ENREGISTRER MON RÉSULTAT</button>
            </Link>
            <Link to={"/quizz"} className="addPost">
                <button className='btn'>REFAIRE LE QUIZZ</button>
            </Link>
        </div>
    )
}