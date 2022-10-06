import './App.css';
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"
import Cards from "../src/pages/Cards"
import { useState } from "react"
import cards from './assets/Db'

import Create from "../src/pages/Create"
import Profile from "../src/components/profile/Profile"
import { Route, Routes } from 'react-router-dom';



function App(bookmarked) {
  const [state, isActive] = useState("home");
  const [isBookmarked, setisBookmarked] = useState(false);

  const bookmark = (id) => {
    setisBookmarked(cards.map((card) => card.id === id ? { ...card, bookmarked: !bookmarked } : card))

  }

  return (
    <div className="App">
      <Header />

      {/*       {{ state === "home" && <Cards cards={cards} />}
      {state === "bookmark" && (
        <Cards cards={cards.filter((card) => card.bookmarked)} />
      )}
      {state === "add" && <Create />}
      {state === "profile" && <Profile />} }
 */}
      <Routes>
        <Route path="/" element={<Cards cards={cards} />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer isActive={isActive} state={state} />


    </div>
  );
}



export default App;
