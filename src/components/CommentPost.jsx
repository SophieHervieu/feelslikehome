export function CommentPost() {
    return (
        <div className="commentPost">
            <div className="comment">
                <label>Poster un commentaire</label>
                <textarea type="text" name="text" id="text" className='message' required></textarea>
                <input
                    type="submit"
                    value="Envoyer"
                    className="button"
                />
            </div>
        </div>
    )
}