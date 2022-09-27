import './App.css';
import Header from "../src/components/header/Header"
import Card from "../src/components/cards/Card"
import Footer from "../src/components/footer/Footer"


function App() {
  return (
    <div className="App">
      <Header />
      <Card question="What day is Today?" answer="Tuesday!" tagOne="#random3" tagTwo="#random2" tagThree="#random1"/>
      <Card question="What day is Tomorrow?" answer="Wednesday!" tagOne="#whateverTwo" tagTwo="#randomOne" tagThree="#whaat"/>
      <Footer />

    </div>
  );
}

export default App;
