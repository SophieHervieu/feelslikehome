// import { useEffect, useState } from "react";
// import axios from "axios";

export function QuizzQuestion({ question, selectedAnswerId, onAnswerSelect }) {
    // const [questions, setQuestions] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [selectedAnswerId, setSelectedAnswerId] = useState(null);

    // useEffect(() => {
    //     axios
    //       .get("http://localhost:3000/api/quizz/questions-with-responses")
    //       .then((response) => {
    //         setQuestions(response.data);
    //         setLoading(false);
    //       })
    //       .catch((error) => {
    //         console.error("Erreur lors du chargement des questions :", error);
    //         setLoading(false);
    //       });
    //   }, []);

    // useEffect(() => {
    // setSelectedAnswerId(null);
    // }, [questionIndex]);
    
    // if (loading) return <p>Chargement...</p>;
    if (!question) return <p>Aucune question disponible.</p>;

    // const question = questions[questionIndex];

    const handleClick = (response) => {
    // setSelectedAnswerId(response.id);
    onAnswerSelect(question.id, response.id);
    };
  
    return(
        <div className='quizzQuestion'>
            <div className="fullContent">
                <h2>{question.question_text}</h2>
                <div className="answers">
                {question.responses.map((response) => {
                return (
                    <img
                    key={response.id}
                    src={response.image_url}
                    alt={`Choix ${response.id}`}
                    className={`answer-image ${selectedAnswerId === response.id ? 'selected' : ''}`}
                    onClick={() => handleClick(response)}
                    />
                );
                })}
                </div>
            </div>
        </div>
    )
}