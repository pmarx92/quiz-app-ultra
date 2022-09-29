import "../cards/Card.css"
import { ReactComponent as Logo } from "../images/bookmark-regular.svg"
import { useState } from "react"


function Card({ question, answer, tags, bookmarked }) {
    const [state, setState] = useState(false);

    return (
        <>
            <div className="card">
                <button className="card--icon">
                    <Logo />
                </button>
                <h2 className="card-question--headline">{question}</h2>

                <button className="card-showAnswer--button" onClick={() => setState(!state)}>{!state ? 'Show Answer' : 'Hide Answer'}</button>
                {state && (
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