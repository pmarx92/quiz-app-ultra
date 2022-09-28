import "../cards/Card.css"
import { ReactComponent as Logo } from "../images/bookmark-regular.svg"

function Card({ question, answer, tags }) {
    return (
        <>
            <div className="card">
                <div className="card--icon">
                    <Logo />
                </div>
                <h2 className="card-question--headline">{question}</h2>
                <p className="card-answer">{answer}</p>
                <button className="card-showAnswer--button">Show Answer</button>
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