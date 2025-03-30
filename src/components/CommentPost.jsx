export function CommentPost() {
    return (
        <div className="commentPost">
            <div className="comment">
                <label>Poster une réponse</label>
                <textarea type="text" name="text" id="text" className='message' required></textarea>
                <input
                    type="submit"
                    value="Répondre"
                    className="button"
                />
            </div>
        </div>
    )
}