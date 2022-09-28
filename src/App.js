import './App.css';
import Header from "../src/components/header/Header"
import Card from "../src/components/cards/Card"
import Footer from "../src/components/footer/Footer"
import { CardContent } from "../src/assets/Db"

function App() {
  return (
    <div className="App">
      <Header />

      {CardContent.map((content) => {
        return <Card key={content.id} question={content.question} answer={content.answer} tags={content.tags} />
      })}

      <Footer />

    </div>
  );
}

export default App;
