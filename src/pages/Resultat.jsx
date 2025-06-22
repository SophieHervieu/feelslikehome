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
            navigate("/quizz");
            return;
        }

        axios.get("http://localhost:3000/api/quizz/results")
        .then((res) => {
            const results = res.data; // tableau de { id_quizz_result, title, description, image_url }

            const counts = {};
            for (const answerId of Object.values(answers)) {
            const resultForAnswer = results.find(r => r.answer_ids.includes(answerId));
            if (resultForAnswer) {
                counts[resultForAnswer.id_quizz_result] = (counts[resultForAnswer.id_quizz_result] || 0) + 1;
            }
            }

            let maxId = null;
            let maxCount = 0;
            for (const [key, val] of Object.entries(counts)) {
            if (val > maxCount) {
                maxCount = val;
                maxId = key;
            }
            }

            const finalResult = results.find(r => r.id_quizz_result === parseInt(maxId));
            console.log("Résultat final calculé :", finalResult);
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