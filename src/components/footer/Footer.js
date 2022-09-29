import "../footer/Footer.css"
import { ReactComponent as Home } from "../images/house-solid.svg"
import { ReactComponent as Bookmark } from "../images/bookmark-solid.svg"
import { ReactComponent as Plus } from "../images/plus-solid.svg"
import { ReactComponent as User } from "../images/user-solid.svg"
import { useState } from "react"

function Footer({ state, isActive }) {

    return (
        <>
            <footer>
                <nav className="footer-navigation">
                    <button type="button" className={`footer-navigation__link ${state === "home" ? "footer-navigation__link--active" : ""
                        }`} onClick={() => isActive("home")}>
                        <Home className="icon"></Home>
                    </button>

                    <button className={`footer-navigation__link ${state === "bookmark" ? " footer-navigation__link--active" : ""
                        }`} onClick={() => isActive("bookmark")}>
                        <Bookmark className="icon"></Bookmark>
                    </button>

                    <button className={`footer-navigation__link ${state === "add" ? "footer-navigation__link--active" : ""
                        }`} onClick={() => isActive("add")}>
                        <Plus className="icon"></Plus>
                    </button>

                    <button className={`footer-navigation__link ${state === "profile" ? "footer-navigation__link--active" : ""
                        }`} onClick={() => isActive("profile")}>
                        <User className="icon"></User>
                    </button>
                </nav>
            </footer>
        </>
    )
}

export default Footer;