import "../footer/Footer.css"
import { ReactComponent as Home } from "../images/house-solid.svg"
import { ReactComponent as Bookmark } from "../images/bookmark-solid.svg"
import { ReactComponent as Plus } from "../images/plus-solid.svg"
import { ReactComponent as User } from "../images/user-solid.svg"


function Footer() {
    return (
        <>
            <footer>
                <ul class="footer-navigation">
                    <a href="index.html" class="footer-navigation__link">
                        <li>
                            <Home class="icon"></Home>
                        </li>
                    </a>
      
                    <a href="bookmark.html" class="footer-navigation__link">
                        <li>
                            <Bookmark class="icon"></Bookmark>
                        </li>
                    </a>
              
                    <a href="profil.html" class="footer-navigation__link">
                        <li>
                            <Plus class="icon"></Plus>
                        </li>
                    </a>
                    <a href="form.html" class="footer-navigation__link">
                        <li>
                            <User class="icon"></User>
                        </li>
                    </a>
                </ul>
            </footer>
        </>
    )
}

export default Footer;