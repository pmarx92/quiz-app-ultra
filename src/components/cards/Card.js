import "../cards/Card.css"
import { ReactComponent as Logo } from "../images/bookmark-regular.svg"

function Card() {
    return (
        <>
            <div class="card">
                <div class="card--icon">
                    <Logo />
                </div>
                <h2 class="card-question--headline">What property flips the axes in flexbox?</h2>
                <p class="card-answer">Answer</p>
                <button class="card-showAnswer--button">Show Answer</button>
                <div class="card-bookmark--links">
                    <div class="card-bookmarks">
                        <a href="." class="card-bookmarks--link">#html</a>
                        <a href="." class="card-bookmarks--link">#flexbox</a>
                        <a href="." class="card-bookmarks--link">#css</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;