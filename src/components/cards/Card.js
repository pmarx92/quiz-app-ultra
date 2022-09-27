import "../cards/Card.css"
import { ReactComponent as Logo } from "../images/bookmark-regular.svg"

function Card({question, answer, tagOne, tagTwo, tagThree}) {
    return (
        <>
            <div class="card">
                <div class="card--icon">
                    <Logo />
                </div>
                <h2 class="card-question--headline">{question}</h2>
                <p class="card-answer">{answer}</p>
                <button class="card-showAnswer--button">Show Answer</button>
                <div class="card-bookmark--links">
                    <div class="card-bookmarks">
                        <a href="." class="card-bookmarks--link">{tagOne}</a>
                        <a href="." class="card-bookmarks--link">{tagTwo}</a>
                        <a href="." class="card-bookmarks--link">{tagThree}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;