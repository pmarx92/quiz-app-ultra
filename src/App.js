import './App.css';
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"
import Cards from "../src/pages/Cards"
import Create from "../src/pages/Create"
import Profile from "../src/components/profile/Profile"
import { cards } from "../src/assets/Db"
import { useState } from "react"

function App() {
  const [state, isActive] = useState("home");


  return (
    <div className="App">
      <Header />

      {state === "home" && <Cards cards={cards} />}
      {state === "bookmark" && (
        <Cards cards={cards.filter((card) => card.bookmarked)} />
      )}
      {state === "add" && <Create />}
      {state === "profile" && <Profile />}

      <Footer isActive={isActive} state={state} />

    </div>
  );
}



export default App;
