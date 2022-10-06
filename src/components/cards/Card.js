import "../cards/Card.css"
import { BsBookmarkStarFill } from 'react-icons/bs';
import { useState } from "react"
import cards from '../../assets/Db'

function Card({ question, answer, tags, bookmark}) {
    const [state, setState] = useState(false);
    const [bookmarkColor, setBookmarkColor] = useState(cards.bookmarked);

    const handleBookmark = (id) => {
        setBookmarkColor(cards.map((card) => card.id === id ? { ...card, bookmarked: !card.bookmark } : card))
    }

    return (
        <>
            <div className="card">
                <button className="card--icon" onClick={handleBookmark}>
                    <BsBookmarkStarFill style={{ color:  bookmarkColor ? "white" : "black" , fontSize: '50px' }} />
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