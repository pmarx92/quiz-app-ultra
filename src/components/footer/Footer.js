import "../footer/Footer.css"
import { ReactComponent as Home } from "../images/house-solid.svg"
import { ReactComponent as Bookmark } from "../images/bookmark-solid.svg"
import { ReactComponent as Plus } from "../images/plus-solid.svg"
import { ReactComponent as User } from "../images/user-solid.svg"


function Footer() {
    return (
        <>
            <footer>
                <ul className="footer-navigation">
                    <a href="index.html" className="footer-navigation__link">
                        <li>
                            <Home className="icon"></Home>
                        </li>
                    </a>
      
                    <a href="bookmark.html" className="footer-navigation__link">
                        <li>
                            <Bookmark className="icon"></Bookmark>
                        </li>
                    </a>
              
                    <a href="profil.html" className="footer-navigation__link">
                        <li>
                            <Plus className="icon"></Plus>
                        </li>
                    </a>
                    <a href="form.html" className="footer-navigation__link">
                        <li>
                            <User className="icon"></User>
                        </li>
                    </a>
                </ul>
            </footer>
        </>
    )
}

export default Footer;