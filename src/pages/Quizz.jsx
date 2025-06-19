import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { QuizzQuestion } from "../components/QuizzQuestion";

export function Quizz() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/api/quizz/questions-with-responses")
          .then(res => {
            setQuestions(res.data);
            setLoading(false);
          })
          .catch(() => setLoading(false));
    }, []);

    const handleAnswerSelect = (questionId, answerId) => {
        setAnswers((prev) => ({
          ...prev,
          [questionId]: answerId,
        }));
    };

    const handleNext = () => {
        if (currentIndex === questions.length - 1) {
            navigate("/resultat", { state: { answers } });
          } else {
            setCurrentIndex(prev => prev + 1);
          }
    };

    if (loading) return <p>Chargement...</p>;
    if (!questions.length) return <p>Aucune question disponible.</p>;

    return(
        <div className="quizz">
            
            <h1>{`Quel est votre style de décoration d'intérieur ?`}</h1>
            <div className="fullContent">
                <QuizzQuestion 
                    question={questions[currentIndex]} 
                    selectedAnswerId={answers[questions[currentIndex].id] || null}
                    onAnswerSelect={handleAnswerSelect}
                />
            </div>
            <button className='btn' onClick={handleNext}>QUESTION SUIVANTE</button>
        </div>
    )
}