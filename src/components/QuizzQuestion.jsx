export function QuizzQuestion({ question, selectedAnswerId, onAnswerSelect }) {

    if (!question) return <p>Aucune question disponible.</p>;

    const handleClick = (response) => {
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
                    data-testid="answer-image"
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