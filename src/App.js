import './App.css';
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"
import Cards from "../src/pages/Cards"
import { useState } from "react"
import cards from './assets/Db'
import Bookmarks from './pages/Bookmarks'
import Create from "../src/pages/Create"
import Profile from "../src/components/profile/Profile"
import { Route, Routes } from 'react-router-dom';



function App(bookmarked) {
  const [allCards, setAllCards] = useState(cards);
  const [state, isActive] = useState("home");


  const bookmark = (id) => {
    setAllCards(allCards.map((card) => card.id === id ? { ...card, bookmarked: !bookmarked } : card))
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Cards cards={cards} bookmark={bookmark} />} />
        <Route path="/bookmarks" element={<Bookmarks cards={cards} bookmark={bookmark} />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer isActive={isActive} state={state} />


    </div>
  );
}



export default App;
