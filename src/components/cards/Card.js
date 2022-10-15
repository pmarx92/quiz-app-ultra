import "../cards/Card.css"
import { BsBookmarkStarFill } from 'react-icons/bs';
import { useState } from "react"


function Card({ question, answer, tags }) {
    const [showAnswer, setShowAnswer] = useState(false);
    const [bookmarkColor, setBookmarkColor] = useState(false);


    return (
        <>
            <div className="card">
                <button className="card--icon">
                    <BsBookmarkStarFill onClick={() => setBookmarkColor(!bookmarkColor)}
                        style={{ color: !bookmarkColor ? "black" : "white", fontSize: '50px' }} />
                </button>
                <h2 className="card-question--headline">{question}</h2>

                <button className="card-showAnswer--button" onClick={() => setShowAnswer(!showAnswer)}>{!showAnswer ? 'Show Answer' : 'Hide Answer'}</button>
                {showAnswer && (
                    <p className="card-answer" data-js="answer">{answer}</p>
                )}

                <div className="card-bookmark--links">
                    <div className="card-bookmarks">
                        {tags.map((tag) => {
                            return <a href="." className="card-bookmarks--link">{tag}</a>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;