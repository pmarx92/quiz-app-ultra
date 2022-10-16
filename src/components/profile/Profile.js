import useToggle from "../toggleButton/useToggle";
import styled, { css } from "styled-components";

const image = 'https://via.placeholder.com/150';

function Profile() {
    const [darkmode, toggleDarkMode] = useToggle();

    return (
        <>
            <StyledMain darkmode={darkmode}>
                <ProfileHeader>
                    <StyledImg src={image} />
                    <ProfileName>Max Doe</ProfileName>
                </ProfileHeader>

                <AboutMeSection>
                    <AboutMeHeadline>About me</AboutMeHeadline>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Vitae purus faucibus ornare suspendisse sed. Risus viverra adipiscing at in tellus integer.</p>
                </AboutMeSection>

                {/*                 <SettingsSection>
                    <CounterQuestions>DummyNumber 0</CounterQuestions>
                    <CounterBookmark>DummyNumber 0</CounterBookmark>

                </SettingsSection>
                <SettingsHeadline>Settings</SettingsHeadline>
                Dark Mode: <DarkmodeBtn onClick={() => toggleDarkMode()}>{darkmode ? "Light Mode" : "Dark Mode"}</DarkmodeBtn> */}
            </StyledMain>
        </>
    )
}

const StyledMain = styled.main`

/* 
${({ darkmode }) =>
        darkmode &&
        css`
      background-color: red;

    `} */
`
const ProfileHeader = styled.div`
padding: 20px;
margin-top: 2rem;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
gap: 50px;
`
const StyledImg = styled.img`
border-radius: 25px;
`

const ProfileName = styled.h2`
font-size: 32px;
`
const AboutMeSection = styled.div`
display: flex;
flex-direction: column;
padding-top: 1rem;
justify-content: center;
margin: 0 auto;
width: 70%;
text-align: left;
`
const AboutMeHeadline = styled.h3`
padding-bottom: 10px;
`
const SettingsSection = styled.div`
display: flex;
justify-content: center;
gap: 25px;
margin-top: 3rem;
margin-bottom: 1rem;
`
const CounterQuestions = styled.p``
const CounterBookmark = styled.p``
const SettingsHeadline = styled.h3`
padding-top: 1rem;
padding-bottom: 1rem;
`
const DarkmodeBtn = styled.button`
margin-left: 10px;
padding: 5px;
`


export default Profile;