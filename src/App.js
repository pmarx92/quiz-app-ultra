import './App.css';
import Header from "../src/components/header/Header"
import Footer from "../src/components/footer/Footer"
import Cards from "../src/pages/Cards"
import cardArray from './assets/Db'
import Bookmarks from './pages/Bookmarks'
import Create from "../src/pages/Create"
import Profile from "../src/components/profile/Profile"
import { Route, Routes } from 'react-router-dom';
import { setLocalStorage, loadLocalStorage } from './assets/Storage';
import { useState, useEffect } from "react"

function App() {
  const [allCards, setAllCards] = useState(loadLocalStorage("allCards") ?? cardArray);
  const [showActivePage, setshowActivePage] = useState("home");
  const [bookmarkedCards, setBookmarkedCards] = useState(loadLocalStorage("bookmarked") ?? []);


  useEffect(() => {
    setLocalStorage("localSavedCards", allCards);
    setLocalStorage("bookmarked", bookmarkedCards)
  }, [allCards])

  const handleBookmark = (id) => {
    setAllCards(allCards.map((card) => card.id === id ? { ...card, bookmarked: !card.bookmarked } : card));
  }

  const removeFromBookmarkedList = (id) => {
    const changeBookmarkStatus = setAllCards(allCards.filter(card => card.id !== id))
    setAllCards(changeBookmarkStatus);
  }

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Cards allCards={allCards} handleBookmark={handleBookmark} removeFromBookmarkedList={removeFromBookmarkedList} />} />
        <Route path="/bookmarks" element={<Bookmarks cards={allCards.filter((card) => card.bookmarked)} removeFromBookmarkedList={removeFromBookmarkedList} handleBookmark={handleBookmark} />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer setshowActivePage={setshowActivePage} showActivePage={showActivePage} />


    </div>
  );
}



export default App;
