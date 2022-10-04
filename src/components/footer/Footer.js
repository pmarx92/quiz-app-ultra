import "../footer/Footer.css"
import { ReactComponent as Home } from "../images/house-solid.svg"
import { ReactComponent as Bookmark } from "../images/bookmark-solid.svg"
import { ReactComponent as Plus } from "../images/plus-solid.svg"
import { ReactComponent as User } from "../images/user-solid.svg"
import { NavLink } from "react-router-dom";
import styled from "styled-components";


function Footer({ state, isActive }) {

    return (
        <>
            <StyledFooter>
                <FooterNavigation>
                    <StyledNavLinks>
                        <NavLink to="/" type="button" className={`footer-navigation__link ${state === "home" ? "footer-navigation__link--active" : ""
                            }`} onClick={() => isActive("home")}>
                            <Home className="icon"></Home>
                        </NavLink>
                    </StyledNavLinks>

                    <NavLink className={`footer-navigation__link ${state === "bookmark" ? " footer-navigation__link--active" : ""
                        }`} onClick={() => isActive("bookmark")}>
                        <Bookmark className="icon"></Bookmark>
                    </NavLink>

                    <NavLink to="create" className={`footer-navigation__link ${state === "add" ? "footer-navigation__link--active" : ""
                        }`} onClick={() => isActive("add")}>
                        <Plus className="icon"></Plus>
                    </NavLink>

                    <NavLink to="profile" className={`footer-navigation__link ${state === "profile" ? "footer-navigation__link--active" : ""
                        }`} onClick={() => isActive("profile")}>
                        <User className="icon"></User>
                    </NavLink>
                </FooterNavigation>
            </StyledFooter>
        </>
    )

}

const StyledFooter = styled.footer`
display: flex;
flex-direction: column;
justify-content: center;
min-height: 70px;
margin-top: 19rem;
`
const FooterNavigation = styled.nav`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: flex-end;
list-style-type: none;
box-shadow: 0 0 10px gray;

`
const StyledNavLinks = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  transition: 0.9s;
  background-color: #84b026;

`


export default Footer;