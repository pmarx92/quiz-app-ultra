import useToggle from "../toggleButton/useToggle";
import styled, { css } from "styled-components";

function Profile() {
    const [darkmode, toggleDarkMode] = useToggle();

    return (
        <>
            <StyledMain darkmode={darkmode}>
                <h1 className="quiz-headline">This page is currently under
                    construction</h1>
                <button onClick={() => toggleDarkMode()}>{darkmode ? "Light Mode" : "Dark Mode"}</button>
            </StyledMain>
        </>
    )
}

const StyledMain = styled.main`
background-color: yellow;
padding: 20px;

${({ darkmode }) =>
        darkmode &&
        css`
      background-color: red;

    `}
`

export default Profile;