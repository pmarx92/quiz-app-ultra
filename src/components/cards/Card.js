import "../cards/Card.css"
import { BsBookmarkStarFill } from 'react-icons/bs';
import { useState } from "react"


function Card({ question, answer, tags }) {
    const [state, setState] = useState(false);
    const [color, setColor] = useState('white');


    return (
        <>
            <div className="card">
                <button className="card--icon">
                    <BsBookmarkStarFill style={{ color: { color }, fontSize: '50px' }} />
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